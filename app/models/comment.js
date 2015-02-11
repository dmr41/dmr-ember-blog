import DS from 'ember-data';

export default DS.Model.extend({
  opinion: DS.attr('string'),
  user: DS.belongsTo('user'),
  post: DS.belongsTo('post')
});
