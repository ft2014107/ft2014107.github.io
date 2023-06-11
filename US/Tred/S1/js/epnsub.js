
function ep01(){
	var url="https://od.bodence.top/api/raw/?path=/%E9%9D%92%E6%98%A5%E5%8F%98%E5%BD%A2%E8%AE%B0.mp4"
	var id=md5(url);
	const dp = new DPlayer({container: document.getElementById('dplayer'),
			video: {url: url,},
			danmaku: {
				id: id,
				api: 'https://dplayer.moerats.com/'
				}
			});
			}



