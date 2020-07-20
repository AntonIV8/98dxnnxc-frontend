import { Serializer as user_roleSerializer } from
  '../mixins/regenerated/serializers/data-line-98dxnnxc-user-role';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(user_roleSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
