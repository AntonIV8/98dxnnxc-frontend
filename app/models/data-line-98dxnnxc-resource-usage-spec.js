import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as resource_usage_specMixin
} from '../mixins/regenerated/models/data-line-98dxnnxc-resource-usage-spec';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, resource_usage_specMixin, Validations, {
});

defineProjections(Model);

export default Model;
