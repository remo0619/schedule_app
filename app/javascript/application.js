// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"
// import "data-confirm-modal"

const initDateTimePicker = () => {
  const $picker = $('.datetimepicker');
  
  if ($picker.length > 0 && typeof $.fn.bootstrapMaterialDatePicker === 'function') {
    $picker.bootstrapMaterialDatePicker({
      format: 'YYYY-MM-DD',
      lang: 'ja',
      weekStart: 0, 
      cancelText: 'キャンセル',
      okText: '決定',
      time: false,
      date: true
    });
  }
};

// ページ遷移時(load)とバリデーションエラー等による再描画時(render)の両方に対応
$(document).on('turbo:load turbo:render', initDateTimePicker);