class StaticPagesController < ApplicationController

  def ember
    render :ember, layout: false
  end

end
