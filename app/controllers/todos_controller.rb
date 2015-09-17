class TodosController < ApplicationController

  def index
    data = []
    todo = Todo.last

    if !!todo
      data = todo.data
    end

    render json: data
  end

  
  def create # one way persisting of data
    todo = Todo.last
    if todo.nil?
      todo = Todo.new(data: params[:todos].values)
    else
      todo.data = params[:todos].values
    end
    todo.save
    render json: {"success" => true}
  end

end
