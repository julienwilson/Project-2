var GAME_LEVELS = [
  ["                                                                                         ",
   "                                                                                         ",
   "                                                                                         ",
   "                                                                                         ",
   "  x                                                                                   x  ",
   "  x                                                                      xxxxx        x  ",
   "  x                                                    yyyyy            xx!!!xx       x  ",
   "  x                xxxxx                              yyyyy              xx!xx        x  ",
   "  x                                  o o      xxx      yyyyy               v          x  ",
   "  x                                                           xxxxx                   x  ",
   "  x                                xxxxx                                              x  ",
   "  x          xx      yyyyy                                                            x  ",
   "  x                 yyyyyyy                                        o                  x  ",
   "  x            L        o                                          o                  x  ",
   "  x                                           xxxx                xxx                 x  ",
   "  x          xxxx       o               xx                      xx!!!xx          T    x  ",
   "  x  @       x  x                                              x!!!!!!!x              x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx ^ xxxxxxxxxxxxxxxxx      xxxxxxx!!!!!!!xxxxxxxxxxxxxxxx  ",
   "                              x ^ x               x      x     x!!!!!!!x                 ",
   "                              x!!!x               x!!!!!!x      xx!!!xx                  ",
   "                              x!!!x               x!!!!!!x        xxx                    ",
   "                              xxxxx               xxxxxxxx                               ",
   "                                                                                         ",
   "                                                                                         "],
  ["                                      x!!x                                                                          ",
   "                                      x!!x                        xxxxxxx                                  xx       ",
   "                                      x!!xxxxxxxxxx            xxxx!!!!!xxxx                               xx       ",
   "                                      xx!!!!!!!!!!xx          xx!!!!!!!!!!!xx                              xx       ",
   "                                       xxxxxxxxxx!!x         xx!!!!!!!!!!!!!xx                             xx       ",
   "                                                xx!x         x!!!!!!!!!!!!!!!x                             xx       ",
   "                                                 x!x         x!!!!!!!!!!!!!!!x                             xx       ",
   "                                                  v          x!!!!!!!!!!!!!!!x                             xx       ",
   "                                                             xx!!!!!!!!!!!!!xx                             xx       ",
   "                                                              xx!!!!!!!!!!!xx                              xx       ",
   "              yyyy                                             xxxx!!!!!xxxx                               xx       ",
   "            yyyyyyyy                                              xxxxxxx        xxx         xxx           xx       ",
   "            yyyyyyyy                                       yyyyy                 x x         x x           xx       ",
   "                                                          yyyyyyy                  x         x             xx       ",
   "                                               x     x     yyyyy                   x         x             xx       ",
   "                                               xx    x                             x         x             xx       ",
   "                  L                            x     x      o  o     x   x         x         x             xx       ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x             xx       ",
   "              xxxxxxxxx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x             xx       ",
   "             xxxxxxxxxxx        x o x          x    xx               x   x   x               x             xx       ",
   "     @   xx  x!!!!!!!!!x        x   x          x     x               x   x   x               x             xx       ",
   "    xxx      x!!!!!!!!!x        x   x          x     x               x   xxxxx   xxxxx       x             xx       ",
   "    x x      x!!!!!!!!!x       xx o xx         x     x               x     o     x x         x             xx       ",
   "!!!!x x!!!!!!x!!!!!!!!!x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x           x x         x             xx       ",
   "!!!!x x!!!!!!x!!!!!!!!!x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx   T   xx             xx       ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!xx     xx!!!!!!!!!!!!!xx       ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxx!!!!!!!!!!!!!!xx       ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx       ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx       ",
   "!!!!x x!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                           xxx",
   "                                    xxxxxxxxxxx                                                            xxx",
   "                                    !!!!!!!!xxxx                                                           xxx",
   "    xxxx                            !!!!!!!!!xxxx                                                          xxx",
   "    x          yyyyyy                     !!!!!!!!!!xxxx                     o                             xxx",
   "    x          yyyyyy                     !!!!!!!!!xxxx                    xxxxx                           xxx",
   "    x @       yyyyyyyy                    !!!!!!!!!!xxxx                                                   xxx",
   "    xxxx                          vxxxxxxxxxxxx               xx                                           xxx",
   "    xxxx                                                           yyyyyy                                  xxx",
   "    xxxx    xxxxx                                     xxxx        yyyyyyyy                                 xxx",
   "    xxxx                                                           yyyyyy                                  xxx",
   "    xxxx               o                                                                                   xxx",
   "    xxxx             xxxx                                     xxxx                                         xxx",
   "    xxxx                                                                                                xxxxxx",
   "    xxxx                                       o     xxxx                   o                xxxxx      xxxxxx",
   "    xxxx                                                                                                   xxx",
   "    xxxx                    xxxx           xxxx  xxxx             xxxx!!!!!!!xxxx                          xxx",
   "    xxxx                                  xxxx!!!!xxxx             xxxx!!!!!xxxx                           xxx",
   "    xxxx                             L   xxxx!!!!!!xxxx             xxxx!!!xxxx                          T xxx",
   "    xxxx                                xxxx!!!!!!!!xxxx             xxx!!!xxx                       xxxxxxxxx",
   "    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",   
   "                                                                                                              "],
  ["                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ", 
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "          xxx                xxx                                                                                                                        xxx                     ",
   "           xxx              xxx                                                                                                                         xxx                     ",
   "            xxx            xxx                                      xxx                                             xxx                                 xxx                     ",
   "             xxx          xxx                                        xxx                                           xxx                                  xxx                     ",
   "              xxx        xxx                                          xxx                                         xxx                                   xxx                     ",
   "               xxx      xxx                                            xxx                                       xxx      xxx                           xxx                     ",
   "                xxx    xxx                                              xxx                xxxx                 xxx       xxx                           xxx                     ",
   "                 xxx @xxx                                                xxx              xxx xxx              xxx                  xxxx                xxx                     ",
   "                  xxxxxx                                                  xxx            xxx   xxx            xxx         xxx       xxxx                xxx                     ",
   "                  xxxxxx                          xx       xx              xxx          xxx     xxx          xxx          xxx       xxxxxxxxxxxxxxx     xxx                     ",
   "                  xxxxxx           xxxxxxxxx      xx       xx               xxx        xxx       xxx        xxx           xxx       xxxxxxxxxxxxxxx     xxx                     ",
   "                  xxxxxx          xx       xx     xx       xx                xxx      xxx         xxx      xxx            xxx       xxxx       xxxx     xxx                     ",
   "                  xxxxxx         xx         xx    xx       xx                 xxx    xxx           xxx    xxx             xxx       xxxx       xxxx                             ",
   "                  xxxxxx          xx       xx     xx       xx                  xxx  xxx             xxx  xxx              xxx       xxxx       xxxx     xxx                     ",
   "                  xxxxxx           xxxxxxxxx      xxxxxxxxxxx                   xxxxxx               xxxxxx               xxx       xxxx       xxxx     xxx                     ",
   "                  xxxxxx                                                                                                                                                        ",
   "                  xxxxxx                                                                                                                                                        ",
   "                  xxxxxx                                                                                                                                                        ",
   "                  xxxxxx                                                                                                                                                        ",
   "                  xxxxxx                                                                                                                                                        ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                ",
   "                                                                                                                                                                                "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
