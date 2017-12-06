// *** Pipes ***

fs.createReadStream("data.gz")
	.pipe(zlib.createGunzip())
	.pipe(through(function write(data) {
		// make data better =)
		this.queue(data);
	})
	// write in file
	.pipe(fs.createWriteStream("out.txt"));
