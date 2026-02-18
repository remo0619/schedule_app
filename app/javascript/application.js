// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"
// import "data-confirm-modal"

$(document).on('turbo:load', function() {
  console.log("jQuery check:", typeof $); // コンソールで確認用

  if (typeof $.fn.bootstrapMaterialDatePicker !== 'undefined') {
    $('.datetimepicker').bootstrapMaterialDatePicker({
      format: 'YYYY-MM-DD',
      lang: 'ja',
      weekStart: 0, 
      cancelText: 'キャンセル',
      okText: '決定',
      time: false,
      date: true
    });
  } else {
    console.error("Datetimepicker plugin not found!");
  }
});