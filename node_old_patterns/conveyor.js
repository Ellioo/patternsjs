// *** Conveyor ***

// conveyor with async waterfall

async.waterfall([
	function(callback){
		callback(null, 'one', 'two');
	},
	function(arg1, arg2, callback){
		callback(null, 'three');
	}
]};