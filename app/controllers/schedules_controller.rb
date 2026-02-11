class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.all
  end

  def new
    @schedule = Schedule.new
  end

  def create
    @schedule = Schedule.new(params.require(:schedule).permit(:title, :start_date, :end_date, :schedule_memo))
    if @schedule.save
      flash[:notice] = "登録が完了しました"
      redirect_to :schedules
    else
      render "new", status: :unprocessable_entity
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
