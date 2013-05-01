describe("Grid Environment", function(){
	it("should have a global grid object", function() {
	    expect(typeof grid).toBe('object');
  	});
	
	it("grid.root should be a ul", function() {
	    expect(grid.root).toBe('ul');
	    expect(grid.root).toBeDefined();
	    expect(grid.root).not.toBe(null);
  	});

	it("grid.el should be a li", function() {
	    expect(grid.el).toBe('li');
	    expect(grid.el).toBeDefined();
	    expect(grid.el).not.toBe(null);
  	});

	it("grid should have a few tiles", function() {
		//grid.numberOfTiles = 0;
	    expect(grid.numberOfTiles).toBeGreaterThan(0);
  	});

  	it("grid should have at least 2 colors set", function() {
	    expect(grid.colors.length).toBeGreaterThan(1);
  	});

  	it("grid.endOnSolidColor should be defined", function() {
	    expect(grid.endOnSolidColor).toBeDefined();
  	});
});

describe("Color Suite", function(){
	var gridHtml, 
		colors, 
		colors_len,
		tiles_len;
		grid = window.grid;

	beforeEach(function(){
		gridHtml 	= grid.create( "#grid" );
		colors 	 	= grid.colors;
		colors_len 	= grid.colors.length;
		tiles_len 	= grid.numberOfTiles;
	});
	it("Should have at least 4 colors", function(){
		var html = $(gridHtml).html();
		expect(colors.length).toBeGreaterThan(3);
	});
	it("There should be " + tiles_len + " tiles and " + colors_len + " colors", function(){
		expect(tiles_len).toBe(8);
		expect(colors_len).toBe(4);
	});
});