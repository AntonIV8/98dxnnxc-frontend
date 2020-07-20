import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  user_id: DS.belongsTo('data-line-98dxnnxc-usr', { inverse: null, async: false }),
  role_id: DS.belongsTo('data-line-98dxnnxc-role', { inverse: null, async: false })
});

export let ValidationRules = {
  user_id: {
    descriptionKey: 'models.data-line-98dxnnxc-user-role.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  role_id: {
    descriptionKey: 'models.data-line-98dxnnxc-user-role.validations.role_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_roleE', 'data-line-98dxnnxc-user-role', {
    role_id: belongsTo('data-line-98dxnnxc-role', 'Role_id', {
      name: attr('Name', { index: 1 })
    }, { index: 0 }),
    user_id: belongsTo('data-line-98dxnnxc-usr', 'User_id', {
      login: attr('Login', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('user_roleL', 'data-line-98dxnnxc-user-role', {
    role_id: belongsTo('data-line-98dxnnxc-role', 'Name', {
      name: attr('Name', { index: 0 })
    }, { index: -1, hidden: true }),
    user_id: belongsTo('data-line-98dxnnxc-usr', 'Login', {
      login: attr('Login', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
