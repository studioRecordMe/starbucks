// youtube iframe api를 비동기로 로드
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubIframeAPIReady 함수 이름은,
// youtube iframe api에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않는다.
// 그리고 함수는 전역 등록해야 한다.

var player;
function onYouTubeIframeAPIReady() {  
  player = new YT.Player('player', {
    // 최조 재생할 유튜브 영상 ID
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동재생유무
      loop: true, // 반복재생 유무
      playList: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때
      onReady: function(event) {
        event.target.mute() // 음소거
      }
    }
  });
}