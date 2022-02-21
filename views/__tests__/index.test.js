import ejs from "ejs";
import template from "../index.ejs";
import dummyData from "../testData/dummyData.js";

test("the UI must have a title", async () => {
  const output = ejs.render(template, dummyData);
  expect(output).toMatchInlineSnapshot(`
"<!DOCTYPE html>
<html lang=\\"en\\">
  <head>
    <meta charset=\\"UTF-8\\" />
    <meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\" />
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\" />
    <link
      href=\\"/stylesheet/custom.css\\"
      rel=\\"stylesheet\\"
    />
    <title>Anime images viewer</title>
  </head>
  <body>

    <h1 class=\\"text-center\\">List of top animes</h1>
    <table class=\\"table container\\">
        <thead>
          <tr>
            <th scope=\\"col\\" class=\\"text-center\\">Rank</th>
            <th scope=\\"col\\" class=\\"text-center\\">Title</th>
            <th scope=\\"col\\" class=\\"text-center\\">Score</th>
          </tr>
        </thead>
        <tbody>
            
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        31
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/7/81992.jpg alt=Haikyuu!!: Karasuno Koukou vs. Shiratorizawa Gakuen Koukou />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Haikyuu!!: Karasuno Koukou vs. Shiratorizawa Gakuen Koukou</h4>
                               <p>
                                   After the victory against Aoba Jousai High, Karasuno High School, once called “a fallen powerhouse, a crow that can’t fly,” has finally reached the climax of the heated Spring tournament. Now, to advance to nationals, the Karasuno team has to defeat the powerhouse Shiratorizawa Academy. Karasuno’s greatest hurdle is their adversary’s ace, Wakatoshi Ushijima, the number one player in the Miyagi Prefecture, and one of the country’s top three aces.

Only the strongest team will make it to the national tournament. Since this match is the third-year players’ last chance to qualify for nationals, Ka
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.8
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        32
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/6/79597.jpg alt=Sen to Chihiro no Kamikakushi />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Sen to Chihiro no Kamikakushi</h4>
                               <p>
                                   Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique character
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.79
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        33
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/3/52133.jpg alt=Monogatari Series: Second Season />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Monogatari Series: Second Season</h4>
                               <p>
                                   Apparitions, oddities, and gods continue to manifest around Koyomi Araragi and his close-knit group of friends: Tsubasa Hanekawa, the group&#39;s modest genius; Shinobu Oshino, the resident doughnut-loving vampire; athletic deviant Suruga Kanbaru; bite-happy spirit Mayoi Hachikuji; Koyomi&#39;s cutesy stalker Nadeko Sengoku; and Hitagi Senjogahara, the poignant tsundere.

Monogatari Series: Second Season revolves around these individuals and their struggle to overcome the darkness that is rapidly approaching. A new semester has begun and with graduation looming over Araragi, he must quickly decide the
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.78
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        34
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/1028/117777.jpg alt=Mushoku Tensei: Isekai Ittara Honki Dasu Part 2 />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Mushoku Tensei: Isekai Ittara Honki Dasu Part 2</h4>
                               <p>
                                   After the mysterious mana calamity, Rudeus Greyrat and his fierce student Eris Boreas Greyrat are teleported to the Demon Continent. There, they team up with their newfound companion Ruijerd Supardia—the former leader of the Superd&#39;s Warrior group—to form &#34;Dead End,&#34; a successful adventurer party. Making a name for themselves, the trio journeys across the continent to make their way back home to Fittoa.

Following the advice he received from the faceless god Hitogami, Rudeus saves Kishirika Kishirisu, the Great Emperor of the Demon World, who rewards him by granting him a strange power. Now, a
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.77
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        35
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/1981/113348.jpg alt=Odd Taxi />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Odd Taxi</h4>
                               <p>
                                   Eccentric and blunt, the walrus Hiroshi Odokawa lives a relatively normal life. He drives a taxi for a living, and there he meets several unique individuals: the jobless Taichi Kabasawa who is dead-set on going viral, the mysterious nurse Miho Shirakawa, the struggling comedic duo &#34;Homo Sapiens,&#34; and Dobu, a well-known delinquent.

But Odokawa&#39;s simple way of life is about to be turned upside-down. The case of a missing girl the police have been tracking leads back to him, and now both the yakuza and a duo of corrupt cops are on his tail. Set in a strangely familiar city filled with unusual in
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.77
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        36
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/1443/111830.jpg alt=Kingdom 3rd Season />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Kingdom 3rd Season</h4>
                               <p>
                                   Following the successful Sanyou campaign, the Qin army, including 1,000-Man Commander Li Xin, inches ever closer to fulfilling King Ying Zheng&#39;s dream of unifying China. With a major geographical foothold in the state of Wei now under its control, Qin sets its sights eastward toward the remaining warring states.

Meanwhile Li Mu—an unparalleled strategist and the newly appointed prime minister of the state of Zhao—has taken advantage of Zhao&#39;s temporary truce with Qin to negotiate with the other states without interruption. Seemingly without warning, Ying Zheng receives news that armies from t
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.77
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        37
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/4/19644.jpg alt=Cowboy Bebop />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Cowboy Bebop</h4>
                               <p>
                                   In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as &#34;Cowboys.&#34; The ragtag team aboard the spaceship Bebop are two such individuals.
 
Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their trave
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.76
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        38
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/10/82947.jpg alt=Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen</h4>
                               <p>
                                   Even after having risen to the utmost rank of shun&#39;ichi, Yotarou struggles to find his own identity in the world of rakugo. Caught between his master&#39;s teachings and the late Sukeroku&#39;s unique style, his performance lacks an important ingredient—ego. And while his popularity packs the theaters, he is but one of the few; rakugo is under threat of being eclipsed.

Meanwhile Yakumo, regarded by many as the last bastion of preserving the popularity of rakugo, struggles to cope with his elderly state. Even though his performances are still stellar, he fears that he is nearing his limits. His doubts
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.75
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        39
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/9/68095.jpg alt=Mushishi Zoku Shou 2nd Season />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Mushishi Zoku Shou 2nd Season</h4>
                               <p>
                                   Ghostly, primordial beings known as Mushi continue to cause mysterious changes in the lives of humans. The travelling Mushishi, Ginko, persists in trying to set right the strange and unsettling situations he encounters. Time loops, living shadows, and telepathy are among the overt effects of interference from Mushi, but more subtle symptoms that take years to be noticed also rouse Ginko&#39;s concern as he passes from village to village.

Through circumstance, Ginko has become an arbiter, determining which Mushi are blessings and which are curses. But the lines that he seeks to draw are subjective
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.74
                    </td>
                  </tr>
              
                <tr>
                    <th scope=\\"row\\" class=\\"text-center align-middle\\">
                        40
                    </th>
                    <td>
                        <div class=\\"row\\">
                            <img class=\\"col-3\\" src=https://api-cdn.myanimelist.net/images/anime/4/86334.jpg alt=Hajime no Ippo />
                            <div class=\\"col-9\\">
                                <h4 class=\\"text-center\\">Hajime no Ippo</h4>
                               <p>
                                   Makunouchi Ippo has been bullied his entire life. Constantly running errands and being beaten up by his classmates, Ippo has always dreamed of changing himself, but never has the passion to act upon it. One day, in the midst of yet another bullying, Ippo is saved by Takamura Mamoru, who happens to be a boxer. Ippo faints from his injuries and is brought to the Kamogawa boxing gym to recover. As he regains consciousness, he is awed and amazed at his new surroundings in the gym, though lacks confidence to attempt anything. Takamura places a photo of Ippo&#39;s classmate on a punching bag and forces 
                               </p>
                            </div>
                        </div>
                    </td>
                    <td class=\\"text-center align-middle\\">
                        8.74
                    </td>
                  </tr>
              
        </tbody>
      </table>
    <ul>
      
    </ul>

    <nav aria-label=\\"Page navigation\\">
          <ul class=\\"pagination justify-content-center\\">
            
              <li><a class=\\"page-link\\" href=\\"/\\">First</a></li>
              <li>
                <a
                  class=\\"page-link\\"
                  href=\\"/?page=3\\"
                  >&larr;</a
                >
              </li>
             

              
            
             
             
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=1\\">1</a>
                </li>
               
               
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=2\\">2</a>
                </li>
               
               
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=3\\">3</a>
                </li>
               
               
             
              
                <li class=\\"page-item active\\"><a class=\\"page-link\\">4</a></li>
               
               
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=5\\">5</a>
                </li>
               
               
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=6\\">6</a>
                </li>
               
               
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=7\\">7</a>
                </li>
               
               
             
              
                <li class=\\"page-item\\">
                  <a class=\\"page-link\\" href=\\"/?page=8\\">8</a>
                </li>
               
              
                <li class=\\"page-item disabled\\"><a class=\\"page-link\\">...</a></li>
               
             

            
              <li class=\\"page-item\\">
                <a
                  class=\\"page-link\\"
                  href=\\"/?page=5\\"
                  >&rarr;</a
                >
              </li>
              <li class=\\"page-item\\">
                <a class=\\"page-link\\" href=\\"/?page=300\\"
                  >Last</a
                >
              </li>
             
          </ul>
      </nav>
  </body>
</html>
"
`);
});
