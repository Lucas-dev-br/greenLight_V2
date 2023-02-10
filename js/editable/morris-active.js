// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2012',
            Python: 0,
            PHP: 0,
            Java: 0
        }, {
            period: '2013',
            Python: 100,
            PHP: 80,
            Java: 65
        }, {
            period: '2014',
            Python: 180,
            PHP: 150,
            Java: 120
        }, {
            period: '2015',
            Python: 100,
            PHP: 70,
            Java: 40
        }, {
            period: '2016',
            Python: 180,
            PHP: 150,
            Java: 120
        }, {
            period: '2017',
            Python: 100,
            PHP: 70,
            Java: 40
        },
         {
            period: '2018',
            Python: 180,
            PHP: 150,
            Java: 120
        }],
        xkey: 'period',
        ykeys: ['Python', 'PHP', 'Java'],
        labels: ['Python', 'PHP', 'Java'],
        pointSize: 0,
        fillOpacity: 0.99,
        pointStrokeColors:['#65b12d', '#933EC5 ', '#006DF0'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth:0,
        hideHover: 'auto',
        lineColors: ['#65b12d', '#933EC5 ', '#006DF0'],
        resize: true
        
    });
	
Morris.Area({
        element: 'extra-area-chart',
        data: [{
            period: '2010',
            Custo: 50,
            ./js: 80,
            Electrical: 20
        }, {
            period: '2011',
            Custo: 130,
            ./js: 100,
            Electrical: 80
        }, {
            period: '2012',
            Custo: 80,
            ./js: 60,
            Electrical: 70
        }, {
            period: '2013',
            Custo: 70,
            ./js: 200,
            Electrical: 140
        }, {
            period: '2014',
            Custo: 180,
            ./js: 150,
            Electrical: 140
        }, {
            period: '2015',
            Custo: 105,
            ./js: 100,
            Electrical: 80
        },
         {
            period: '2016',
            Custo: 250,
            ./js: 150,
            Electrical: 200
        }],
        xkey: 'period',
        ykeys: ['CSE', './js', 'Electrical'],
        labels: ['CSE', './js', 'Electrical'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['#006DF0', '#933EC5', '#65b12d'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#006DF0', '#933EC5', '#65b12d'],
        resize: true
        
    });