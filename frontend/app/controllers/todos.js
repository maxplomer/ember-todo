import Ember from 'ember';

export default Ember.Controller.extend({

  update_todos: function () {
    var data = [];
    this.model.forEach(function(todo){
      if (todo != null) { data.push({text: todo['text']}); }
    });

    //need to create a rails todo model and store all todos in there
    //or update if one already exists
    Ember.$.ajax({ url: '/todos/', data: {'todos': data}, dataType: 'json', type: 'POST'});
  },

  actions: {
    add_todo: function () {
      this.model.pushObject({'text': this.get('todo_string')});
      this.set('todo_string', '');
      this.update_todos();
    },
    delete_todo: function (todo) {
      this.model.removeObject(todo);
      this.update_todos();
    }
  }

});