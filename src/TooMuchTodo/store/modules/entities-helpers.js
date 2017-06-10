import { normalize } from 'normalizr';
import Immutable from 'immutable';
import models, { schemas } from '../../domain/models';

export default function normalizeImmutableModelEntities(payloadEntities) {
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
}
