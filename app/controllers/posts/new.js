
import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    newPost: function() {
      var name = this.get('nameSpace');
      var title =this.get('titleSpace');
      var body = this.get('contentSpace');
      if (name && title && body) {
        var user = this.store.createRecord('user', {user: name});
        user.save();
        var post = this.store.createRecord('post', { title: title, body: body, user: user });
        this.set('nameSpace', '');
        this.set('titleSpace', '');
        this.set('contentSpace', '');
        post.save();
      }
      else {
        alert("Please fill in all fields!");
      }
    },
}
});
