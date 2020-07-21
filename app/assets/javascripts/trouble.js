$(function(){

  let search_list = $(".troublecontainer");
  function appendTrouble(trouble){
    let html = `
                <div class="leftwrapper__result" data-trouble-id=${trouble.id}>
                  <p class="content">
                  ${trouble.content}
                  </p>
                  <p class="createdat">
                  ${trouble.created_at}
                  </p>
                </div>
                `
    search_list.append(html);
  }
  function appendErrMsg(msg){
    let html = `
                <div class="leftwrapper__result">
                  <p class="content">
                  ${msg}
                  </p>
                </div>
    `
    search_list.append(html);
  }
  let detail_list = $(".rightwrapper")
  function appendDetail(trouble){
    let html = `
                <ul class="rightwrapper__list">
                  <li class="rightwrapper__list__item errmessage">
                    <p class="title">エラーメッセージ：</p>
                    <p class="content">${trouble.content}</p>
                  </li>
                  <li class="rightwrapper__list__item">
                    <p class="title">エラー画面：</p>
                    <p class="content">${trouble.err_screen}</p>
                  </li>
                  <li class="rightwrapper__list__item solveurl">
                    <p class="title">参考URL：</p>
                    <p class="content">${trouble.solve_url}</p>
                  </li>
                  <li class="rightwrapper__list__item consider">
                    <p class="title">エラー発生理由：</p>
                    <p class="content">${trouble.conduct}</p>
                  </li>
                  <li class="rightwrapper__list__item conduct">
                    <p class="title">解決手順：</p>
                    <p class="content">${trouble.consider}</p>
                  </li>
                </ul>
                `
      detail_list.append(html);
  }
  $("#search_trouble").on("keyup", function(){
    input = $('#search_trouble').val()
    $.ajax({
      type: 'GET',
      url: '/troubles',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(troubles){
      $('.troublecontainer').empty();
      if(troubles.length !== 0){
        troubles.forEach(function(trouble){
          appendTrouble(trouble);
        })
      }else{
        appendErrMsg("そのようなエラーを投稿してる人はいません");
      }
    })
    .fail(function(){
      alert("検索失敗・・・");
    })
  });
  $(".leftwrapper__result").on("click", ".content", function(){
    const troubleId = $(this).attr("data-trouble-id");
    const url = '/troubles/' + troubleId
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json'
    })
    .done(function(trouble){
      $('.rightwrapper__list').remove();
      appendDetail(trouble);
    })
  })
});