'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "549b3032cae754ccb29fd5c0b5a01531",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "7946354d7fb12ca4561ea4a4ec6cfaf1",
"index.html": "1d9b13e81eff80d65c7928f93555e20a",
"/": "1d9b13e81eff80d65c7928f93555e20a",
"main.dart.js": "070172eee807c2f3712344504c9eff5b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "c563d3d3e1dd0cff658423fe4258e609",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/de7d7f586b307ea770cdec1bd0f8840236bc9a": "1a105bd271335521765f15262ebbe130",
".git/objects/68/afa07d7e69aed9cd97a219cdcd26f733f1ba7f": "0c1785303e882ec0f818fb68811cc253",
".git/objects/57/982e51feb0ae161d1010ec814caf8d97bab5a0": "ba91583218694cb2953393aadbb136e0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/3e7448bf65c03685e24a895282f4a7116d7898": "0268df505248cd8b8e0139c238b97a1e",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/56/b627bebb933eef786a8d16cce47fccff0b9696": "4bd1c0ad5680a9007e364f42432ff506",
".git/objects/3d/8458f39d6e4bee34690033a7ddc76f6deeaf02": "d6e2ae2fac6080ea8f254b9e1813e102",
".git/objects/58/a5da50b5b21a49e6cb827e5900c4a8d09b5ff8": "bd44ae579bd75d9701ffdbd5e81858e0",
".git/objects/93/827ee62d6696883af3b4f8d23a8ca5875f1870": "4a861736ddc128121898aa2a21f3ce01",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/3ade1b024076c7436dcc50f5d590b20721062e": "469f82cbc6cb4b818ffdadb09fbe917f",
".git/objects/b2/b506777dd577a0270b152ba5037a4785759d15": "a72508b963bd0b4b035247360d8619c1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/d43f570ac1ef26e71e4a219474658a17bd6dc4": "8d52003bd3d99e694bc419eee0383e74",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/139def40ad2d6c0c61760383520004ff57476f": "0f0bd553c36aaa76a8e761d29fb414e5",
".git/objects/d8/95fd99410309d0cf44602c762e6e90a8a3efc2": "e86267e1319a1cdbe17b14e80e761200",
".git/objects/f3/b1deda1c594859a1f5197644142f73e2a85868": "8fc00ee8b8c9d045131ef0a72c3602f5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/bcf67417617f2a4b304b211cd95167b5b75dc4": "d286107dc666b13528865a60041463a7",
".git/objects/ee/f45b0fa0661b5cd6df3f64522700ba69612f84": "943a4ba6b8a5301bae38a93c42c85342",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/698b17dbff27822010b6914891327114b349f8": "89247418a1ed75093cdbb765f8bd3d5a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/8825ef18c051cb4ceecf4d3c0dd296984f0ff9": "cc5c32157d072a989ec4ff1f5cd23dce",
".git/objects/c8/43d258ab85e07a9195189fa1b8c8a932adfdf0": "a3d46402c4ebfe4007b58fd35f90b457",
".git/objects/ed/becdf356a68a7b178cb915e892b0a9285da1e0": "4846db579860211e9fc9e1105a40b6b7",
".git/objects/20/d6df78b3cd253d0aa237b6c7408b5bd54cd304": "a6af563837b585d9561851f3e4c3a482",
".git/objects/27/eb55430b9e36c5efef36865b3a4fe6c22ede80": "86d4aaa6613551b6fe7cd9be95c8c3dd",
".git/objects/4b/061b0ed862ef5a1af8f0ebdee7bc64524774b1": "0cd399bc7ad3de0c4fc31937e37c18aa",
".git/objects/7d/5a6f0d0163f148858924630721d49600981bd5": "16adea2c2f2802b4f8a0f502e225697a",
".git/objects/29/3f3347fb9a323148c676eedf64c1d1379970d8": "9edc8b5c5096a7f5b31d85dc2df58bd2",
".git/objects/29/cb59e1fe954b9524e87bf02f430bb0be91b855": "64e9a7209fb1254f29d51584ea54952e",
".git/objects/8f/9f8792922cce75e8487a848416078ce92e377e": "84d50ae2dd1edbe4ee158dc90789e08b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/8199c56f4ee811f589b3bbf844415821d63abc": "cb17ae6917f1948c9467dc1ac5b76ad0",
".git/objects/2a/d8a78c4fe8fbdc80db08bf40f3e58ac7ead655": "b9812ea7d071ae9f478631113b76e74a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/bd2a97e727f6b3bb86cb33c95890432fada0da": "cabdc31c21a4c6fff93002be0a41f77b",
".git/objects/9f/aa5b15ba8ffaae621702d46b8d412229ef5a8c": "461e9db991ca24fac75dca94ff177484",
".git/objects/6e/0f33c8ec610b839abde763a5344a89a28365e7": "7f6077c93e1653bfd8c3ef83f4deb86e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/87041348f9dd3404efb645e35e366fca1e7d52": "0ef60e437299545d69168c4c763c405c",
".git/objects/65/59a0f0c6275155281a6d22ce53626dbf61d0f3": "80508fafb960f48406cf0c9e83001bc5",
".git/objects/3a/6d6403b0f78869de9ed39cbe4d34a0e374ac06": "05c68545b2cbd85e36a5ce1b31548257",
".git/objects/3f/497aebe6795f0295331053610758fb937025ac": "1982b41d0848d94f2154ce39902742cc",
".git/objects/5e/4c1161579bae38c2b78ac9b8d0300441ced9f2": "e7a4395c8111692e048bb149c88e291f",
".git/objects/5e/298cc62abefe093c3312e6207a1c7afe39f41e": "10bc8b4d9f02b6aa2850247504a6ca11",
".git/objects/5e/8a82e302b8aa279d7a01efe6475224ea18e616": "e6fc8ac18fde75a645d33040b1d2683a",
".git/objects/08/34076d9489f4c62ded711286c68d5750ad4d79": "530694908175a0e3889a29a1fde0d05a",
".git/objects/6d/2b6a69115102c8d673758899a24b822f9bd42b": "3bb0555bbb0876cddd047cd781eb8403",
".git/objects/06/74ae3e4fc8c3f7baa53dbb582dd420ea73f224": "4cb86117577f320667297db8b700946e",
".git/objects/6c/49187f9c82da2d902f7434b089772592a1ba01": "d69385b1fad10f604e009eea9fb3e66c",
".git/objects/0f/ccffbc7de178f917aa89432c267c7d18b1de31": "0a449b28a4bb841aa708c9d6762ab389",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/d3/e743876d4fa8b089268f8cb71517f020fa12ac": "02d33f2f9be2e52b755cefa17b745955",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9d953f40069074682430b004ef43584b0c2d83": "47306ff50e5ba1f509b33667a5f6541c",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b7/813fd108298b0b3a1cda26d1c62e3949b565d8": "bd58d8c78f1ab2f4b79ccc01cf3e64dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c4fca06a2de5093fb7bf8952843c6878168825": "ecdb03fe20c088050cf535a47513f294",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/0863e73005ac049eaf4a1249d98ac482a843b2": "8d6895ab15b1d7226f2c838563a6ff84",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/dea49fc20fecfed4c909866c68e0ddc586c29b": "fb36a3a5b83b9a3394fb3c33855618d6",
".git/objects/c4/e01e60cc49251ee6babc94e13e3b50e6d6fa03": "088a6e47361c3224bcef0fffa9b4174d",
".git/objects/cd/b2c1497a08890b844f64e8500c45832016ed27": "0668c8494487d28130918bf88872817c",
".git/objects/f9/60f610e42e9cd6b0be4c20de175546a794ec53": "172594b693422c0254e7b67ba20913a5",
".git/objects/e8/63948fafb6e0559920301f0ea854f7b3d4b26a": "249b260fa3c428297cdc74d6c63e8c41",
".git/objects/e9/3a191aa025b232fd824b4e16e30d1a96499e24": "b9195af97317ae2f9f6604a84a664f6e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/7a921fd756b779d3e5ed5170a9f73c4a91388e": "212939f846b3465594dfb75803e37f0b",
".git/objects/2c/b7ad53dd769ca4576f40215676364a23c8a96a": "1ca9c73f6609983f9fa7cc38fb2e8360",
".git/objects/41/7807f57d2ca23c4e84c06d4010dc107e25d597": "400acd51b057d31bd8a0716a643c336c",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/1e/3908c764ef1ecf96b245f7e9b30b5402216a4f": "bccf92734bcf86dfc7968d995917eca7",
".git/objects/4a/1c685bf8c7ecf9929c4a19904afa913e345963": "dd6ab71e1c156fc48fe996ea1bba233e",
".git/objects/24/1efb474b5b3f4c45f02b4010bd57cc1acd6616": "bf4b143c1b032a0a2c2b02da067c217e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/9a58bda273f63bcb8e0012a797d8b4e5e8ecc8": "6db9521922ebe87200381473e8682093",
".git/objects/8d/24f050078c59690e4a632cd6b696ddb7320cc4": "81f875802b8ab50d4b1c4e9b815bdefb",
".git/objects/12/c7801f40dd0dd1b49ec0daa5ab00654061b875": "9a7439c0ec5af6d760ae25e93d52cd5a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/c4738183fc63dfae3d26659840e58c7ecb5e44": "546f08742a6dfc065fca014c5054b12c",
".git/objects/78/246ea48a0953bba7d9ef0f2946469b803881f1": "20b7c7a946ea27bbf31308a59994956f",
".git/objects/14/3fba469f25b7b26d343c893f6da0366d6b0ab5": "8e3fce317733556d648985de97c6d746",
".git/objects/25/cb71169ab4da9fb33f451fdf96d794ac4e0653": "578eff83216e5b5676312cab05cf28a5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9479220dde91c5b7f4d07ac4cbf4d02c",
".git/logs/refs/heads/main": "9479220dde91c5b7f4d07ac4cbf4d02c",
".git/logs/refs/remotes/origin/main": "77941b6925a147461754fdb7877c1506",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a56e13d2b550a688cdc2da7b2ade9e13",
".git/refs/remotes/origin/main": "a56e13d2b550a688cdc2da7b2ade9e13",
".git/index": "7388c5c109284a53d905070bd6086154",
".git/COMMIT_EDITMSG": "8b58b1fec5de97a16a32b2ca49178f4b",
"assets/images/heart.gif": "38a291a78c4f9570d7ba91d8aa3db4aa",
"assets/images/background2.png": "9070cd9699137f2ffc98a8a991b777c6",
"assets/images/heart2.gif": "153b280e81461162851dec06e485daa7",
"assets/images/titanic.png": "5d732c41fe07ac159d748a42bbdde6d4",
"assets/images/handwave.gif": "f3fc3df204ab2c13aa0cf686dc941f13",
"assets/images/customersegmentation.png": "3b87040c58f7771e41cb505fdc977191",
"assets/images/my_pic2.png": "ecd472c9ca0d007cec2501b86a50c43d",
"assets/images/traffic.png": "5a65d204b15029cff6b80b5f67f34d69",
"assets/images/my_pic.png": "5e07ef4adc83cb40efade111521bc05e",
"assets/AssetManifest.json": "138051e1bc0f91119a7c0a28188d2453",
"assets/NOTICES": "53310e2c782a0a2eea19a3f84cb888f2",
"assets/FontManifest.json": "a14d9f5930384bba499181cd9402381e",
"assets/AssetManifest.bin.json": "5eb07be8f836c862fe86b983f5062f30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bc2eef8bfd8677673027e46c26b1cf9a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "41e8302cbaf04408585d948a435f4421",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1db6b8aa7085822bdd61f077988334be",
"assets/fonts/playfair/Playfair_144pt-SemiBold.ttf": "93bcca01f632a5d987a967ed71c67cbc",
"assets/fonts/playfair/Playfair_144pt-Light.ttf": "ccb8bc6271dcd89421c76bd1dffc34e2",
"assets/fonts/playfair/Playfair_144pt-MediumItalic.ttf": "17dc421b8012fb0b82bfb258f6497485",
"assets/fonts/playfair/Playfair_144pt-SemiBoldItalic.ttf": "42c30862f27c4657316704c439a8fd2b",
"assets/fonts/playfair/Playfair_144pt-Italic.ttf": "72aad46d6e0004f3e7aedd78e8762049",
"assets/fonts/playfair/Playfair_144pt-ExtraBoldItalic.ttf": "54d4a6ff593fe6ebf5c433b3c19e6846",
"assets/fonts/playfair/Playfair_144pt-BoldItalic.ttf": "0954570eb5262ebc8a4956395745018e",
"assets/fonts/playfair/Playfair_144pt-Medium.ttf": "33097f2684fdea5fc7284571aea4f38c",
"assets/fonts/playfair/Playfair_144pt-Bold.ttf": "12587d146bc5fa2379f7162f7907dc96",
"assets/fonts/playfair/Playfair_144pt-BlackItalic.ttf": "b58bbb640afccc3cc501a6b3706a7105",
"assets/fonts/playfair/Playfair_144pt-Regular.ttf": "ebf7977cebe7475e8dffe43fb5ab1502",
"assets/fonts/playfair/Playfair_144pt-Black.ttf": "77b6613d0a1d632e9f91542fb7f9441e",
"assets/fonts/playfair/Playfair_144pt-LightItalic.ttf": "0b16c36e511e2d464a0cf1f18b36379d",
"assets/fonts/playfair/Playfair_144pt-ExtraBold.ttf": "77cfc81bc71ea57e216d209f1c1eac41",
"assets/fonts/spectral/Spectral-ExtraBold.ttf": "c2d9c8497e0129a3eca21c8fcd872bf1",
"assets/fonts/spectral/Spectral-BoldItalic.ttf": "b1080ef46700d6d02951344d310b006c",
"assets/fonts/spectral/Spectral-MediumItalic.ttf": "b202f158a4a7931d1b444fb785fadb70",
"assets/fonts/spectral/Spectral-Medium.ttf": "bd7b2fbf172698f463734c9f9b0de319",
"assets/fonts/spectral/Spectral-Regular.ttf": "7faec6001a586192378b45f65129650a",
"assets/fonts/spectral/Spectral-ExtraBoldItalic.ttf": "199599649e080e8054bd1eea78b3f2e7",
"assets/fonts/spectral/Spectral-SemiBold.ttf": "482b4c26222e29b2aa4cbad51d9eaeb8",
"assets/fonts/spectral/Spectral-LightItalic.ttf": "d01a9d02908d915549fb5886d5cc058d",
"assets/fonts/spectral/Spectral-Italic.ttf": "2bbd8d844e3a5da1088b51045ed93af6",
"assets/fonts/spectral/Spectral-SemiBoldItalic.ttf": "551e02781e44c230be186242fe9b2369",
"assets/fonts/spectral/Spectral-Bold.ttf": "bf2eb9c68c1435f68690c9ab677fe13f",
"assets/fonts/spectral/Spectral-Light.ttf": "f0543fdd857883bd3c7616a787d928ee",
"assets/fonts/cursive/cursiveRegular.ttf": "8d31107b80c8b0c5a896d4188b733d16",
"assets/fonts/bg/bgExtraLight.ttf": "0e66297d36d7f24484f3ec8a2232d6fc",
"assets/fonts/bg/bgExtraBold.ttf": "5bfb4fa1f8907c768231d97bc27e8df9",
"assets/fonts/bg/bgRegular.ttf": "6586800789b30b19bbaeb349ca5d240a",
"assets/fonts/bg/bgLight.ttf": "a1f1439e622b6998c9b639bbf0a23f01",
"assets/fonts/bg/bgBold.ttf": "2f7de7a336f650f9cee5ed919cc3b003",
"assets/fonts/bg/bgMedium.ttf": "1363130c7bdf956d164cb7e605619849",
"assets/fonts/MaterialIcons-Regular.otf": "ee975661f681023671de94bbfff6dacc",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
