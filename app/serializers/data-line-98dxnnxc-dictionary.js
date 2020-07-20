import { Serializer as dictionarySerializer } from
  '../mixins/regenerated/serializers/data-line-98dxnnxc-dictionary';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(dictionarySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
