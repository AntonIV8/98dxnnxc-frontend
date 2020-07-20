import { Serializer as service_stateSerializer } from
  '../mixins/regenerated/serializers/data-line-98dxnnxc-service-state';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(service_stateSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
