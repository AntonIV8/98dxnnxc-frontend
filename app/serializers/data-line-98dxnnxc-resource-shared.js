import { Serializer as resource_sharedSerializer } from
  '../mixins/regenerated/serializers/data-line-98dxnnxc-resource-shared';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resource_sharedSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
