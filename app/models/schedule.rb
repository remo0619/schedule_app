class Schedule < ApplicationRecord
  validates :title, length: { maximum: 20 }, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true, comparison: { greater_than_or_equal_to: :start_date }
  validates :schedule_memo, length: { maximum: 500 }

  before_save :convert_all_day_to_label

  private

  def convert_all_day_to_label
    if self.is_all_day == "1"
      self.is_all_day = "⚪︎"
    else
      self.is_all_day = ""
    end
  end
end
