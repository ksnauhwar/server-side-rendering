module.exports = {
	module:{
		rules:[
			{
				loader:'babel-loader',
				test:/\.js?$/,
				exclude:/node_modules/,
				options:{
					presets:[
						'react',
						'stage-0',
						['env',{targets:{browsers:['last 2 versions']}}]
					]
				}
			}
		]
	}
}