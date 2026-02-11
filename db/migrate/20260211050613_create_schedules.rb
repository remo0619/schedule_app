class CreateSchedules < ActiveRecord::Migration[7.2]
  def change
    create_table :schedules do |t|
      t.string :title
      t.datetime :start_date
      t.datetime :end_date
      t.string :is_all_day

      t.timestamps
    end
  end
end
