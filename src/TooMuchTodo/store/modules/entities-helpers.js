import { normalize, denormalize } from 'normalizr';
import Immutable, { fromJS } from 'immutable';
import models, { schemas } from '../../domain/models';

export const normalizeImmutableModelEntities = (payloadEntities) => {
  // payloadで渡されたモデルのインスタンスを配列で扱う
  const entities = Array.isArray(payloadEntities)
    ? payloadEntities : [payloadEntities];

  // 各インスタンスをネイティブのオブジェクトに変換してから正規化を実行、
  // 結果を2次元のMap[モデル名][id]にマージする
  const normalizedObjectEntities = entities.reduce((mergedNormalizedMap, entity) => {
    const normalized = normalize(
      { [entity.constructor.name]: entity.toJS() },
      { [entity.constructor.name]: schemas.get(entity.constructor.name) },
    ).entities;

    // モデルごとにオブジェクトをMapで詰める
    Object.keys(normalized).forEach((entityKey) => {
      const entitiesOfTargetModel
        = mergedNormalizedMap.get(entityKey) || new Map();

      Object.keys(normalized[entityKey]).forEach((id) => {
        entitiesOfTargetModel.set(id, normalized[entityKey][id]);
      });

      mergedNormalizedMap.set(entityKey, entitiesOfTargetModel);
    });

    return mergedNormalizedMap;
  }, new Map());

  // 各オブジェクトから、該当するモデルクラスのインスタンスを生成して、
  // 新規Map[モデル名][id]に詰めて返却する
  return Array.from(normalizedObjectEntities)
    .reduce((recreatedMap, [entityKey, entityObjects]) => {
      const ModelClass = models[entityKey];
      return recreatedMap.set(
        entityKey,
        Immutable.Map(
          Array.from(entityObjects)
            .map(([id, entityObject]) => [id, new ModelClass(entityObject)]),
        ),
      );
    }, Immutable.Map());
};

// TODO: テストを書かないと不安
const pickEntitiesAndSchemas = (allEntities) => {
  console.warn('denormalize!!');
  const entityNames = allEntities.keySeq().toArray();
  return entityNames.reduce((pickedEntitiesAndSchemes, entityName) => {
    // e.g. { users: [ 1, 2 ] }
    pickedEntitiesAndSchemes[0][entityName]
      = Array.from(allEntities.get(entityName) || new Map()).map(([key]) => key);

    // e.g. { users: [new schema.Entity('users')] }
    pickedEntitiesAndSchemes[1][entityName] = [schemas.get(entityName)];
    return pickedEntitiesAndSchemes;
  }, [{}, {}]);
};

export const denormalizeImmutableModelEntities = (entities) => denormalize(
  ...pickEntitiesAndSchemas(entities),
  fromJS(entities),
);
