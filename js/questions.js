var quest = [[1,2,3,4,5,6,7],
             [1,4,9,16,25,36,49],
             [5,9,17,33,58,122,250],
             [-11,-10,-7,-2,5,14,25],
             [1,0,-4,-7,-13,-18,-26],
             [3,6,10,15,21,28,36],
             [1,12,34,67,111,166,232],
             [-36,-35,-33,-30,-26,-21,-15],
             [-13,-11,-4,10,33,67,114],
             [-3,-2,2,11,22,52,88],
             [-1,1,-1,1,-1,1,-1],
             [-2,4,-6,8,-10,12,-14],
             [1.5,3,4.5,6,7.5,9,10.5],
             [0.5,2,4.5,8,12.5,18,24.5],
             [-123,-116,-104,-85,-57,-18,34],
             [3,9,20,38,65,103,154],
             [-17.5,-10.5,0,14,31.5,52.5,77],
             [-4,8,-16,32,-64,128,-256],
             [-27,-21,-10,6,27,53,84],
             [1,8,22,48,71,106,148],
             [200,136,82,34,-6,-38,-62],
             [30,29,27,24,20,15,9],
             [-3,8,-15,24,-35,48,-63],
             [221,322,423,524,625,725,827],
             [-2,-4,-6,-8,-10,-12,-14],
             [-5,8,-11,14,-17,20,-23],
             [-3,6,-9,12,-15,18,-21],
             [-2,4,-8,16,-32,64,-128],
             [2.5,5,7.5,10,12.5,15,17.5],
             [-3,-3,-7,-7,-11,-11,-15],
             [4,7,11,16,22,29,37],
             [41,40,38,35,31,26,20],
             [35,35,34,32,29,25,20],
             [1,16,32,49,67,86,106],
             [1,4,7,10,13,16,19],
             [5,11,18,26,35,45,56],
             [-3,-2,-1,0,1,2,3],
             [-12,-13,-13,-12,-10,-7,-3],
             [5,10,17,26,37,50,65],
             [3.2,3.5,3.9,4.4,5.0,5.7,6.5],
             [-1.2,0.3,1.4,2.5,3.6,4.7,5.8],
             [1,23,67,133,221,331,463],
             [3,7,16,32,57,93,144],
             [4,8,15,25,38,54,73],
             [2.5,5.0,7.5,10.0,12.5,15.0,17.5],
             [2,8,18,32,50,72,98],
             [-23,-13,1,19,41,67,97],
             [3,0,-8,-23,-47,-82,-130],
             [2,4,8,16,32,64,128],
             [3,5,9,17,33,65,129],
             [-2,-1,-4,-3,-6,-4,-8],
             [-3,0,8,23,47,82,130],
             [2,4,8,16,32,64,128],
             [5,8,11,14,17,20,23],
             [2,11,20,29,38,47,56],
             [-3.2,-3.5,-3.9,-4.4,-5.0,-5.7,-6.5],
             [2.0,2.1,2.2,2.3,2.4,2.,5,2.6],
             [3.1,4.2,5.3,6.4,7.5,8.6,9.7],
             [9,13,17,21,25,29,33],
             [1.343,3.334,5.343,7.334,9.343,11.334,13.343],
             [3,9,18.5,31.5,48,68,91.5],
             [1.5,5.5,12,21,32.5,46.5,63],
             [3.5,9.5,18,29,42.5,58.5,77],
             [13,31,14,41,15,51,16],
             [1,7,13,19,25,31,38],
             [1,8,20,39,64,95,129],
             [-21,12,-32,23,-43,34,-54],
             [2,6,14,30,62,126,254],
             [1.5,4,-6.5,9,-11.5,14,-16.5],
             [4,7,11,16,22,29,37],
             [463,331,221,133,67,23,1],
             [-1.5,4,-6.5,9,-11.5,14,-16.5],
             [-2.1,-1.2,0.3,1.4,2.5,3.6,4.7],
             [4,7,13,22,34,49,67],
             [3.5,8.5,15,23,31.5,42.5,55],
             [0,1,3,6,10,15,21],
             [0,4,18,48,100,180,294],
             [2,5,10,17,26,37,50],
             [1,9,17,25,33,41,49,57],
             [128,64,32,16,8,4,2],
             [92,86,76,62,44,22,-4],
             [1.3,2.4,3.5,4.6,5.7,6.8,7.9],
             [1,13,25,37,49,61,73],
             [0,2,6,12,20,30,42],
             [0.8,0.83,0.86,0.88,0.89,0.9,0.91],
             [1,0.75,0.67,0.63,0.6,0.58,0.57],
             [3,2,0.6,1.5,1.4,1.33,1.29],
             [0.67,1.5,0.75,1.33,0.8,1.25,0.83],
             [0.25,0.5,0.75,1,1.2,1.5,1.75],
             [4,2,1.33,1,0.8,0.67,0.57],
             [0.5,0.2,0.13,0.09,0.07,0.06,0.05],
             [0.5,0.2,0.1,0.06,0.04,0.03,0.02],
             [0.33,0.5,0.6,0.67,0.71,0.75,0.78],
             [-0.25,0.13,-0.06,0.03,-0.02,0.01,-0.00],
             [-2,1,-0.8,0.71,-0.67,0.64,-0.62],
             [-0.5,0,0.17,0.25,0.3,0.33,0.36],
             [1.25,1.2,1.17,1.14,1.13,1.11,1.1],
             [0.5,0.67,0.75,0.8,0.83,0.86,0.88],
             [-0.33,0.2,-0.14,0.11,-0.09,0.08,-0.07],
             [2,2,2.67,4,6.4,10.67,18.29],
             [0.2,0.43,0.78,1.09,1.38,1.67,1.94],
             [34,21,13,8,5,3,2],
             [6,14,23,33,44,56,69],
             [12,6,18,45,22.5,3.75,26.25],
             [5,36,2.65,8,81,3.16,11]

];


var hint = [''];