
function ep01(){
	var url="https://pan.bilnn.cn/api/v3/file/sourcejump/J8YlMeHz/65oKqLxX9I_E5SZCqWEbiZ54aZpciN3kSnCIecN5cLw*"
	var id=md5(url);
	const dp = new DPlayer({container: document.getElementById('dplayer'),
			video: {url: url,},
			danmaku: {
				id: id,
				api: 'https://dplayer.moerats.com/'
				}
			});
			}



