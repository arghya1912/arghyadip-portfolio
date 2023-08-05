'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2dfb6a9887b2e790856aa6ccba175526",
".git/config": "53d7cac60c80f7ae0ceb11dfe1d4d2da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5fe5785d29293d098c79b29c99bd0cbd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb2c245104ec444f0006585011f1a92a",
".git/logs/refs/heads/master": "eb2c245104ec444f0006585011f1a92a",
".git/logs/refs/remotes/origin/master": "aa4cdca67a7a4ea40248f01a4628d467",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/9702e1a828da8339ef34760c3e3d194d132420": "372cd16a2a5cc52da8627dc78d908ee0",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/0a/2ba38dbcc4258fd18337c178f3e1c6675ddef7": "8b6e4b586273da522ef9ddf1274cda2a",
".git/objects/0a/7780628e11f55dd3a8c89e177bfe231e2c890b": "d8b81d852298390d8246612935188aa8",
".git/objects/0a/935fada516b1e52526abf15e879d2eede8b8fd": "a2be1aa8d46230a1c322cb7be79885c3",
".git/objects/0b/7796ceb3373faf244a7d97c9243f42cdfa2225": "605b5f1233896c7beaa930baed8257e5",
".git/objects/0d/d7ac4063472d93d4dbc694e00e89a87ff226ce": "e28160874148d41bd58d51ff8b153926",
".git/objects/0e/a3020a978bae979e829403cfbf2d34fc6f65cf": "57e82c5a0c6860beafe6915db6b7efb1",
".git/objects/0f/56bb3c9699a579bb81aa7e6e1b9834355f525b": "6619b16793ee8ee592aa2ce4ef020831",
".git/objects/10/7106f96fa2682c80ed5370a0f64e4a1f46f396": "20efdbeed73633fc81e48a218d6685ff",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/9346a06da8ecae49fed99cf030dd39014dcc1a": "7908dc4bdc6c5c8aa6e45eb4e1d8c3b0",
".git/objects/14/02d68a59e5e5ed8d2b2980f8118755e8086f52": "93b276bb6b605c9640596b1fba307618",
".git/objects/17/3561bf4f7fc8391f76cdca51d45303e5765e32": "f5a1b8130885c86457506e4f0c8feb29",
".git/objects/17/76afa3a8654b9ed45edeea028344696ac427ae": "ed2c9b7568e53024cad3f9570c2b285a",
".git/objects/18/e850527c79c0211454f0a723e8bb64442fd155": "e9554f72db90b20ee581b14677c738af",
".git/objects/1d/9d1323297457538e32c8690ecb2ba33a653a97": "9d6acd1855987c9331d1f2548dc2cf9f",
".git/objects/20/42bc768c524c867dabb11eeb599d523cb3cebf": "37cfed7ae850a5f4cfc5eda45aba9580",
".git/objects/21/0d69a5476d14c183eed791d9d9c200050ccace": "e415da083ea2249101d9f787293b3f1a",
".git/objects/24/bec128957238239e2a45bd180ae32d07738e11": "bca2ce906d9aad9f0e702341fe6c685b",
".git/objects/2a/937b46a694cf8f3998d446a5e1755260a0ab14": "105aa74aa0814b308dc418a8ea8098f2",
".git/objects/2c/ae5ccdc18eaca8be0990039535bb1ac746b310": "83ff45f5de0a206c21b54a037a54fc2f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/ea1078c5fe5f514511acefc56b5c7d8ec2fb86": "4c588f4aa43c0d00efb253bace798cf6",
".git/objects/32/45e1c5a5d7f373b7ebfe185c7f6231ceced015": "119e6e79b367f6b9cbf94dbaaec00d04",
".git/objects/34/d9efd6e94f26b26f6ab583b2e6bc52c13f67f3": "e3f8f75d300a04ef9bff17d5692bb11e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/f1d499dd216cd5a89d002b8960922da5d159dd": "c0449fd0c32d3820ad8d159316faac15",
".git/objects/38/6749e9a4123be7477c34cbd031d3f90b8c7cd4": "4adf64bf54b323ceae72a9ddfa7ed24c",
".git/objects/39/4d2197fe4bb5546b28d076b17ec582af9d2b86": "eaa59a3995697bfebc6be0c1c257a14c",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/ea7b7de28e166655c3548fa51ed60767057ca9": "8ccb942e9ed3ab0068568f080ec87325",
".git/objects/40/78834ef82f542c7c03cd05cc2c1bd37916cafc": "0326dd326bd6e2258087f33ccdb22dcc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dd60b39301d3f368e8cec198da1a20bbfadfde": "544df2cd4a247a2d8332e0610c1baae9",
".git/objects/46/dda9928b3480251668340bdf0536cd7ef2e067": "f2942673d0741be79cd9df881ff4900b",
".git/objects/46/fa995568e576734f6a368d9f4fee3d710db11e": "9ccf83bb43aa5edc79fe264294eeb44f",
".git/objects/4a/7a8d3d05a54c6af07c0679ed731209997a0fdc": "7ee325c9069d9c739ddc29aa5a1de83d",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/9f4140ad497903ab3a9e7682880230f2dbc31f": "7ff575de55c575431e72c2f25305a766",
".git/objects/4e/b4a3c868ff5f9b966f335b96fc443b85cc4b78": "760a09a04475e42ab3dfd730abb8d774",
".git/objects/4f/03cd691efe8d5609288741c7912a3976d60479": "cf3eda356ecaee68fbd0cddd048c8bc7",
".git/objects/53/4cd44cacfc1ca2f111823d5359cd77780126c2": "126bc582f43192b77dca9d53fd6d2514",
".git/objects/53/53acb22679140e8dc8fb6fdef3c13994cce760": "ad8870ed4fe2a85659503ef3fb745b4f",
".git/objects/55/5df3a9e1312d9eb53192de86ff0956bdc26b23": "0e0aa1148afdc31efa2bf938f6a875bf",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/870d3625e5ad293be3fc33aa5b9a3d023cb03c": "3a30e065bb74c047ac2dc2da94a48d3c",
".git/objects/59/fa82d7efa9b67d16a240c4ad16c5b353a9f605": "94dde29df253ab454764303b85004d14",
".git/objects/5a/41d29da4841a42cd2b7f4e3ed360bf56b36268": "a6f52031d69c874c6377beeba172d033",
".git/objects/5c/9012226a9f84996823cd9c831d1d43467afd24": "1e467ec95ffd94b82389ab9184a24e15",
".git/objects/5c/a34885e1df366e4483f51b442b3d3c2708831c": "75ead723edd53be3cc92749e9b82496c",
".git/objects/5d/c299b25b81c11f85762ad9be994fc525ffcb9a": "cbd0e351cf97be8f3c7647489c15b10b",
".git/objects/60/4169b1475537607383aaa11de6145be85bf301": "4eae6df4eb02b6757918cb17d0837333",
".git/objects/61/cf789d552b2598bd56eaafb1519025e4834bef": "afe1b119a660c635b3b395d15e511b0c",
".git/objects/65/822348c406cd086b1c15a1876291d64bd36f3a": "68e69583cc963aa9160b0e47b559ebce",
".git/objects/66/ec1bf1c6deac5fe794cdeb3a21d50aa1273e29": "74e3373de1fcf902abceb720d04cf176",
".git/objects/68/3e562ce228f9607e9c974b322962956a2912fd": "b5061916b4a5b0bad440621dcce954bf",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/607479c5cef0c81c8a363c195ac2910f519574": "50ec11d479ca8a7beecb27967a5423ee",
".git/objects/71/a92ebc298ebe979dcd1d387859b1500fea9317": "2cbd61a3f9204e40462ddbaf5bc40c31",
".git/objects/72/4bfe8d58524d2e0bbe0b26bafa632c368b3ec0": "8df84e698e31c6d9bee98359d735968c",
".git/objects/73/2616502a4b823f6572c9419be09c3e52683985": "e849b78602a016c679cf31cc5860aa97",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/95a81172e174dd4eaafb9b6ca064598800c876": "696fd439398150d2588874bd27d9471a",
".git/objects/78/ef397f1917f1db79c725b572d7593f8084fc42": "51e7c565595bf3c414fcdd202b93fe26",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/a79a75d0b1c4a706a0a42d7cfb1b80feaa2526": "64a0789baf3fd53eb7b80ece40980aa4",
".git/objects/7b/cfa9340c38c22ab53760dbd567b0fd238ddf82": "9881be19d5255443f3144df387f8a170",
".git/objects/7f/d633c2118f1430ccafdb83503fe8824e03fb5f": "89a4f599d542ed04f3b18c0b2279b9da",
".git/objects/83/6d7b0f8d40013019491cdc02606d2e6e4efc92": "7236797aed6f22246236861b844d771a",
".git/objects/83/7993e27b2e563da88f1a92e671fdc291feda2e": "696d00a92bad082b97ea0d2dff445c16",
".git/objects/84/2b787a2354939e875ff17eb1c372370d0c28c4": "a92dfb71615bb3420578acd929127d04",
".git/objects/85/e5ac9c8458c048c4f8c814769254089b10354b": "5dba2d27a33d6d639516045cd9a7d982",
".git/objects/88/4366127b10f484e5a51f0836b93e25bf5cd97d": "572aaf6a184df8f0132c6e85299502e5",
".git/objects/88/bb3da1736066fe3be1d28a2adcd6eb8ec1400e": "0a4cbf8bcbd9f8109d93b3b50c114a5c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4498ee4e0ad3c854a6bc38dc35bf49df5db2b0": "9ef22adf0c809e2b27012ee56ef2ad79",
".git/objects/8a/a141bb21b285c90bbe978b613a2931ad21adfe": "ec06c96d0f40d120f4e9d539616cd111",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/666ad3f5a898082c2f622d439fd79fbda12f26": "f07255efc1dd45a009128f03ca4aa124",
".git/objects/99/9299a9f7f08cd84fd5ebf35fa3fc8a2f8c8ec2": "5dbd979b61875e4e3e061a1203065e9e",
".git/objects/9c/00a0dfc5c3f13278d1ec13ad6845ea5543525a": "ee8d6c32666adbaac30fb6cdc5fd8c7e",
".git/objects/9c/9183577ab38a057113790830d81571967b2cb6": "e4a14c3bb393326c4bd28539da7056e2",
".git/objects/9d/c79ff128fff31191ca3bcecf4a614b708d2992": "c57566b52341b3d7cfc678568273e7a6",
".git/objects/9e/da0235b8c38c3d32b159073c61f697b75c8292": "4946002c9d3262fe687248ef9937faf0",
".git/objects/a0/a8229dcdbd0fb58f8494eee0192ab0a999bcf9": "c3f321b5d7ca17579c9a42367babea7f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/cb98458d3fed65d01bec64d878411f90ab8117": "31d6703f5c199f7025f10989cb96340c",
".git/objects/a7/baf8e98f7e08060011bacec2c58732904bb9bf": "b92295a43e6fd4c09e186f116a8a78c4",
".git/objects/a9/348887c4af19de81915b3c05dc54f205b60919": "97347a62d9d00ce9815d2e50054cea62",
".git/objects/aa/4ab9cdba0512c8bcc7f5493f377c75da26f8e8": "da83c885fec0e40aa16419d8cb61f549",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ad/44d43c2ff6133178434e701e41014e3bccca34": "15674227cc02c317203e1f8810d5edae",
".git/objects/ae/d44ea85d6530932cacf6609461e482c34597a8": "6aadf5f091ead2683b38306c1ddad101",
".git/objects/b1/2122d9c6bae3bb88a275cdae1b446aaac66bd2": "ced6455783fbb276d665daa502996736",
".git/objects/b4/5477a0f92c00fa6881f3b6c69a8acdf61ef8c1": "f624b2de4735ddfa66818b3bd658a92d",
".git/objects/b4/e69f9d47ffafecbce08e577a979567f62632b9": "725b40fc42c57c0de05d052badbe7d2f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/14044682ea161d73a41d0ed5b590c5d3784332": "fb148e881b54db49ec7f05e2c32fd978",
".git/objects/b9/20b3cccada9f8e7111e35a72021611244b59ea": "778d9f4feedf90eb65a76984ee9be698",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/621ab373c84d5079019a3e5a5e155e2846c333": "793a5f2ffb97080404d430d93d86fcff",
".git/objects/be/9f2d5b4deafacd9373da9c7c11eb84c6608a38": "b0b60b293dd6fc8d86a90daa7ed5d83c",
".git/objects/c3/aa33179491ffa5e44d97de3226ecb0e306dc62": "2c5dc31152ca51d164fd41499aec37b7",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/5aaceba4ea7414a5c8d9141f779a3131d699c9": "9f381a5bf97d2a2c39ce6b4795b45d85",
".git/objects/c9/916404deb363e7562808ef0e028228ae7b6d10": "58d3ed37f84f507e93f95b79bfc4adb2",
".git/objects/d3/c463e088dcafd8edb47fecb981380ee10e83ea": "efb743c40572539319acff252b70ec39",
".git/objects/d4/783cec86cee53eb626e1a09be74d12f81fddd5": "ae5cf52a5f4507f090ece995915f8068",
".git/objects/d5/175590747ecb870054177fdfe9dcf16ab4ce0a": "47ae1c48a6a75f5c4732d998e9a166b3",
".git/objects/d5/71308a40839c8ea41f5de6541e1a20c07ac8a9": "6a9bcb7025309c06a87ba0996afda8f2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a98da7b8292c96c9c71a0975bb2f169d783c7a": "67fcf5313c77bfb71f103c7f46111d6d",
".git/objects/d6/e6de468c0d642a38c6e3c995ee167e993f2af5": "ed330bbb8849ac1a799d86a959cb9ff4",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/d8/bb163fabdad4da4e3938dc7a5547c0d2bbc6f5": "e9a11886c98668c16f87c0110994823f",
".git/objects/db/814035bb85be897c432c793a9ead81851eae16": "3d2ebe61ec3afd2ff28438bb5cce262c",
".git/objects/e0/f56421939059baa16aa16a68bf0355c6f68816": "89efd0b5f14575004dc7c372a1dbca22",
".git/objects/e1/c505131841a1c6c0ba5f9e17ddaceafad822b9": "3a2c7c953ce74f03cdbbd5aa6831182b",
".git/objects/e1/f1f6c23c749c1b30fc26254f92d8cd15d31dec": "e01a070b07216957c5dbe0aeaadbc00f",
".git/objects/e4/efcec6bc8f5e4a9e1e0898942675b8614c3df2": "b30086b5340c7e43dc6a8d8050120058",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/f0126053aa986d83a256f15c3621171d4a4f09": "bf46002a3fbdba939ba0ce3126103ecf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2df51bac1ec5a2e4b1f1ce8daa9284a1a5d2d2": "efb05f43516cc68e53bca3d0710268a4",
".git/objects/f3/d15cf4538dcded672a21ffd9c4746a55690ebb": "22cf4dd64854fd2aacc7592fed62f422",
".git/objects/f6/51973e97f6d509653a1d32dc4ca23662bb75f2": "d50edeecd1f823769364c8460638dc4b",
".git/objects/f7/a78bddbb90c4aa0897bb6e4132a9e8ba7af388": "77ce90e62b8e2b790e0011d32aa88824",
".git/objects/f8/580bee213753e6a6ea6fb78721ca124e7e33d1": "e36ab59a5a19ed255ef2d5e48acd8c97",
".git/objects/fa/9cdcc765d6db591daa80b8a03ad588f7c5d355": "86427449c21f10161ea8f3b732ce9bc4",
".git/objects/ff/26eeb5e30ae553d761944cc8d4ce8bc3602c3a": "f45e16425e910a89ed21e90fc7a0e60d",
".git/objects/ff/a95347ebedb28bc7963485ef8fb0695dfc3bff": "59145882201889cffd6c700ad2c343a6",
".git/refs/heads/master": "804edcdb760bfeb2e0d0991721f4f3e6",
".git/refs/remotes/origin/master": "804edcdb760bfeb2e0d0991721f4f3e6",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f70f74321bba3a0d5093b2549cac245e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5cabbdaf54e409d96e17de99352d4410",
"/": "5cabbdaf54e409d96e17de99352d4410",
"main.dart.js": "15d7b70012a31386429dd28322ec1ce3",
"manifest.json": "a25697d20e2fae72eb063bc4d26b1e9d",
"version.json": "b00d72a847632953c91e7e091270d0c6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
