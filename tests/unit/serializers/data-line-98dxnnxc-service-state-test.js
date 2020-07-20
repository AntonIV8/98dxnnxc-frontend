import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-98dxnnxc-service-state', 'Unit | Serializer | data-line-98dxnnxc-service-state', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:data-line-98dxnnxc-service-state',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:data-line-98dxnnxc-cardinality-type',
    'model:data-line-98dxnnxc-catalog',
    'model:data-line-98dxnnxc-characteristic-type',
    'model:data-line-98dxnnxc-contragent',
    'model:data-line-98dxnnxc-customer-acl',
    'model:data-line-98dxnnxc-customer',
    'model:data-line-98dxnnxc-dba',
    'model:data-line-98dxnnxc-dictionary-value',
    'model:data-line-98dxnnxc-dictionary',
    'model:data-line-98dxnnxc-grp',
    'model:data-line-98dxnnxc-order-item',
    'model:data-line-98dxnnxc-order-state',
    'model:data-line-98dxnnxc-product-catalog',
    'model:data-line-98dxnnxc-resource-characteristic-log',
    'model:data-line-98dxnnxc-resource-characteristic',
    'model:data-line-98dxnnxc-resource-common',
    'model:data-line-98dxnnxc-resource-log',
    'model:data-line-98dxnnxc-resource-shared',
    'model:data-line-98dxnnxc-resource-spec-characteristic',
    'model:data-line-98dxnnxc-resource-spec',
    'model:data-line-98dxnnxc-resource-usage-spec',
    'model:data-line-98dxnnxc-resource',
    'model:data-line-98dxnnxc-role',
    'model:data-line-98dxnnxc-service-characteristic-log',
    'model:data-line-98dxnnxc-service-characteristic',
    'model:data-line-98dxnnxc-service-log',
    'model:data-line-98dxnnxc-service-order',
    'model:data-line-98dxnnxc-service-spec-acl',
    'model:data-line-98dxnnxc-service-spec-characteristic',
    'model:data-line-98dxnnxc-service-spec',
    'model:data-line-98dxnnxc-service-state',
    'model:data-line-98dxnnxc-service-usage-spec',
    'model:data-line-98dxnnxc-service',
    'model:data-line-98dxnnxc-user-group',
    'model:data-line-98dxnnxc-user-resource-spec',
    'model:data-line-98dxnnxc-user-role',
    'model:data-line-98dxnnxc-user-service-order',
    'model:data-line-98dxnnxc-user-service-spec',
    'model:data-line-98dxnnxc-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
