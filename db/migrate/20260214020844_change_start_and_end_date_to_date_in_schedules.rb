class ChangeStartAndEndDateToDateInSchedules < ActiveRecord::Migration[7.2]
  def change
    change_column :schedules, :start_date, :date
    change_column :schedules, :end_date, :date
  end
end
