class TroublesController < ApplicationController
  before_action 
  def index
    if params[:keyword] == ""
      @troubles = Trouble.all.order("created_at DESC")
    else
      @troubles = Trouble.where('content LIKE(?)', "%#{params[:keyword]}%").order("created_at DESC")
    end
    respond_to do |format|
      format.html
      format.json
    end
  end
  def new
    @trouble = Trouble.new
  end
  def create
    @trouble = Trouble.new(trouble_params)
    if @trouble.save
      redirect_to root_path
    else
      render :new
    end
  end
  def show
    @trouble = Trouble.find(params[:id])
  end

  private
  def trouble_params
    params.require(:trouble).permit(:content, :err_screen, :solve_url, :conduct, :consider).merge(user_id: current_user.id)
  end
end
