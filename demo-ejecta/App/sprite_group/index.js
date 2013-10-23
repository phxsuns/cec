//kissy config
var S = KISSY;

console.log(canvas.width, canvas.height)

S.use('cec/cec', function (S, CEC) {
	var Ticker = CEC.Ticker,
		Sprite = CEC.Sprite;

    var stage = new Sprite('canvas');

        // var container = new Sprite({
        //     x: 400,
        //     y: 300,

        //     points: [[0, 0],[200,0],[200,200],[0,200]],
        // }).setFillColor('#aaa').appendTo(stage);

        // for (var i = 0; i < 10; i ++) {
        //     var rect = new Sprite({
        //         x: (Math.random()*container.width),
        //         y: (Math.random()*container.height),
        //         width: 20,
        //         height: 20
        //     }).setFillColor('#ff4a00').appendTo(container);
        // }

        var container2 = new Sprite({
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            fillColor: '#ccc'
        }).appendTo(stage);
        var a = new Sprite({
            x: 0,
            y: 0,
            width: 80,
            height: 80,
            fillColor: '#f40'
        }).appendTo(container2);
        var b = new Sprite({
            x: 0,
            y: 0,
            width: 40,
            height: 40,
            fillColor: 'red'
        }).appendTo(a);

        Ticker.singleton.on('tick', function (dt) {
            stage.clear();
           // container.rotate('+1');
            container2.rotate('-1');
            a.rotate('-0.5');
            stage.render(dt);
        }); 
});

