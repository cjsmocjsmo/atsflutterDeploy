'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "d0480ba5285e12cd979e06ba661c9ff7",
"assets/video/TopOut.mp4": "987baa562558479b9cdbe6b733b8a867",
"assets/video/SmallRigOut.mp4": "5cdac505dc8fea9d6922cf4a08b01816",
"assets/video/LogDrop.mp4": "d7055d1255bb537212cef29ca62fb04b",
"assets/NOTICES": "3c47976edd29f1c629841cf87d8cf302",
"assets/AssetManifest.json": "cc96dc6798cad2c141a2ac0754129cb4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "dc46be7892be224118a3097938f523e7",
"assets/images/kitsap.webp": "9084693ff03693c3a74f62abd7e9033a",
"assets/images/smallrigout_overlay.webp": "6301753bc98db2a53372dd4e0a72012b",
"assets/images/cloudflare.webp": "a0e87378a5bd269ec93512fa7d96cd6b",
"assets/images/pierce.webp": "4fa00ac1b7da8f2f6f166e8ac7e2db47",
"assets/images/button-logo200.png": "a108b0b6d3125116a128375943ae5abf",
"assets/images/make_it_snow.jpg": "85671436ad43b5365162b79188a82dc5",
"assets/images/snow_bound_hemlock.jpg": "0746aa1a73c4dd35001d2f8beb4d5855",
"assets/images/firebase2.webp": "3c05d58f69eb82dad3da9c1999040bb4",
"assets/images/dying_white_pine.jpg": "56f404c6d185c5665630f6f949658239",
"assets/images/webp/JustGettingStarted.webp": "2fe244724f5986f8578679a51b97ed5c",
"assets/images/webp/MakeItSnow.webp": "1bd5e4fc341e8fbf67e90370d4d054c4",
"assets/images/webp/SnowBoundHemlock.webp": "119b445bcb63e01e014499af687969e3",
"assets/images/webp/DyingWhitePineRemoval.webp": "471bb297c69df338b66e58b503b88ad1",
"assets/images/webp/BigTreeTopRemoval.webp": "f8875d3b179da0695ac1bd5d89d3b6b5",
"assets/images/webp/BigCedarTreeRemoval.webp": "f54a8b2015d04ab4d43e382494b51611",
"assets/images/wind_damaged_cedar.jpg": "c291854cf81b4cbc80a12cc0506a414e",
"assets/images/mason.webp": "36e4a7f67b3b047bb45c4664eba54eda",
"assets/images/logdrop_overlay.webp": "23c75e7424b460774443a70ed6e45909",
"assets/images/douglas_fir_removal.jpg": "8edbb3b0b420c90de1e06cf47a471a60",
"assets/images/cedar_tree_removal.jpg": "6b029b3c44ad4200c32d5c91993c311d",
"assets/images/we_cut_trees.jpg": "4e77d973d34a61886757a3f98d0ff6e8",
"assets/images/flutter_logo2.webp": "45f2adfe6c05cf372599228f95af79c0",
"assets/images/just_getting_started.jpg": "66dcc092393b6fc99c80478082b9df19",
"assets/images/topout_overlay.webp": "de48f86fe153be046424108ea33326aa",
"assets/images/banner.webp": "257221fa0e9f985cf12504522a4019de",
"assets/images/tight_spaces.jpg": "0181a2dd93bcce3eb692f7c9015775eb",
"assets/images/curt.webp": "43a7b06a5b4e679d537bb7015460e35d",
"assets/images/big_tree_top_removal.jpg": "317bc9b0e09ac3b2cb8ac7bc1c2d428d",
"assets/images/gallery/landscape/20201121_141826.webp": "1de6ab1215f7b708d99c4bbb69826917",
"assets/images/gallery/landscape/20211022_083103_thumb.webp": "5256e2f120a7efb78545a7adc28aac94",
"assets/images/gallery/landscape/20201121_154747.webp": "9895c96a9f916137ae7c6189e0adbefe",
"assets/images/gallery/landscape/20201121_141845_thumb.webp": "632faf061f9ea0e4af89b07f9255a10d",
"assets/images/gallery/landscape/20211023_111619.webp": "58266ee9fdc24de15ef09099a889853a",
"assets/images/gallery/landscape/20201112_105832.webp": "3541b6e42908464c586d246e8aaf11e1",
"assets/images/gallery/landscape/20201121_141826_thumb.webp": "a5a4ac9b386f2b86d008647ec288a80d",
"assets/images/gallery/landscape/20201121_154747_thumb.webp": "6e67d4488089148d1cef40b1d2e7dbcb",
"assets/images/gallery/landscape/20201112_104620.webp": "62aa92cbd634776c5b91a62b9a710ade",
"assets/images/gallery/landscape/20211023_111607.webp": "e701088c74f890de675fe775be74362f",
"assets/images/gallery/landscape/20201121_141838.webp": "0632e26e0d273c68e4b6af12d0711031",
"assets/images/gallery/landscape/20211023_111619_thumb.webp": "f14ec019eb866bb5530144202f73e7e8",
"assets/images/gallery/landscape/20201112_105838_thumb.webp": "53b2f54c8f2c62c7118c3f53b3fa7216",
"assets/images/gallery/landscape/20201112_105832_thumb.webp": "76207fa765420c921e1f48cf62b4f30a",
"assets/images/gallery/landscape/20211023_111607_thumb.webp": "fd9e09ee6d01301e7fe9cf057ebc4279",
"assets/images/gallery/landscape/20201121_141608_thumb.webp": "9d83ac7f2828ed0953362e4b5bd72589",
"assets/images/gallery/landscape/20210114_141712.webp": "b3e4b210b400117e692e33fd0ed9af51",
"assets/images/gallery/landscape/20201112_104620_thumb.webp": "0df59dedc89a94a15a45e1bce3446817",
"assets/images/gallery/landscape/20201121_141544_thumb.webp": "2d6697a5c050333227712f652506f4f5",
"assets/images/gallery/landscape/20201121_141549.webp": "d198ab1c43643eb16d5237aec2691dcd",
"assets/images/gallery/landscape/20201121_141845.webp": "4319f93b6a4ac7ddfa8ab303db33e417",
"assets/images/gallery/landscape/20210114_140555.webp": "2f597c95d21d1fdad5bf1172d429df06",
"assets/images/gallery/landscape/20201112_105838.webp": "b0c7016500b9ec4e6cdf875b70d2f364",
"assets/images/gallery/landscape/20200520_143645.webp": "ca9871b2b592c9abbcbaee7c6f552347",
"assets/images/gallery/landscape/20201121_141838_thumb.webp": "ce220f005fe650bc41db6321b0e2051e",
"assets/images/gallery/landscape/20200520_143645_thumb.webp": "64b917dae8d5ecd3af93ef1735c1c71d",
"assets/images/gallery/landscape/20211022_083103.webp": "1454fd822ca8797564e88e2fa2f03131",
"assets/images/gallery/landscape/20210114_141712_thumb.webp": "5749886e46974c0b2ac339ab6328e04b",
"assets/images/gallery/landscape/20210907_174135.webp": "1f6dc6c78a425a7855a77df2fc8a678b",
"assets/images/gallery/landscape/20201121_141608.webp": "9f8f1a481c9a77d5422055ab22b328e6",
"assets/images/gallery/landscape/20201121_141544.webp": "41318dbfab9103c7337e3b3c274289ad",
"assets/images/gallery/landscape/20201121_154954_thumb.webp": "9717039b72cfaae59d7d86824bd35ea4",
"assets/images/gallery/landscape/20201121_141549_thumb.webp": "9cc562a3f15d6af884f4b9b134d104d5",
"assets/images/gallery/landscape/20210907_174135_thumb.webp": "f234501b26252b0ae21c9b2eefae7fb6",
"assets/images/gallery/landscape/20201121_154954.webp": "e621a3a1297e45b6f2d187b2239ba184",
"assets/images/gallery/landscape/20210114_140555_thumb.webp": "d681bba0cb5fb9e0d20319bbbf2cccc7",
"assets/images/gallery/portrait/20201112_103812_thumb.webp": "2bdc3e8a0ff3d15d1b726b33a701835f",
"assets/images/gallery/portrait/20210901_110253.webp": "ef7d3613f5fb0f3b04579974eb70b065",
"assets/images/gallery/portrait/20210114_131804_thumb.webp": "8c4dbab7cfa036e4cbf3695d8d9416b8",
"assets/images/gallery/portrait/20210114_130013.webp": "a1d2613409b0b2a66ecbc839cbb1cdbb",
"assets/images/gallery/portrait/20210709_084059.webp": "acd711239315cfe0794543ba64359c52",
"assets/images/gallery/portrait/20210114_140603.webp": "6216674b450ff20bdf4a30f711727275",
"assets/images/gallery/portrait/20210728_110344_thumb.webp": "48e590d4af025a279c620e0075c330ee",
"assets/images/gallery/portrait/20210907_161055_thumb.webp": "2f75f8ed492fe17ec4923714ab44748d",
"assets/images/gallery/portrait/20210901_110237_thumb.webp": "727caa938a22ebfd3caf55626c4f12e7",
"assets/images/gallery/portrait/20210907_161053.webp": "6618cfe9641ca984e6b7b80ce6fd8723",
"assets/images/gallery/portrait/20210114_131757.webp": "9b5a3ed205b81b9852b1af2dbb482b7a",
"assets/images/gallery/portrait/20210918_112452.webp": "bcab8d7a9643e52af8935e8afde9d346",
"assets/images/gallery/portrait/20210907_161104.webp": "f7778d85d147bc170bec6846d5438e6a",
"assets/images/gallery/portrait/20200703_122220_thumb.webp": "3a98f10ade049dbd76561a449ab2a087",
"assets/images/gallery/portrait/20200703_122219.webp": "e3690848867dcfcb0b3f4d230c4cae41",
"assets/images/gallery/portrait/20201121_142519.webp": "05ee7d8caae8f633077a7bf6ae738165",
"assets/images/gallery/portrait/20210918_105132_thumb.webp": "1b2ea4d9fe56a42afe36b25647bbb8a9",
"assets/images/gallery/portrait/20210907_161051_thumb.webp": "81b62bae71bd33d1f89a545aecd9fddf",
"assets/images/gallery/portrait/20201121_142519_thumb.webp": "d49900394adc2d7288dc04c21e73caea",
"assets/images/gallery/portrait/20210901_110253_thumb.webp": "f40a848724bc86c47a426beb2714a075",
"assets/images/gallery/portrait/20210728_110233_thumb.webp": "12c85a0364efc827daced462a719eb61",
"assets/images/gallery/portrait/20210901_110234.webp": "2ab4432ab8d168f412612f8b7eb27062",
"assets/images/gallery/portrait/20201119_100147.webp": "19fe0841794e9ae00e520cd7ab9aeb1e",
"assets/images/gallery/portrait/20210901_110629.webp": "9bdb31c422410f50f0d41c6dd07c3cb3",
"assets/images/gallery/portrait/20210907_161104_thumb.webp": "3b9ec4d5f3c0f22a793ba5f9ab5362f5",
"assets/images/gallery/portrait/20210907_161053_thumb.webp": "f61e15f914f12073b452776394be18b3",
"assets/images/gallery/portrait/20210918_105132.webp": "ea41badb8bf2d734a6442925d907a9a8",
"assets/images/gallery/portrait/20210901_110619_thumb.webp": "91d22c5a357b536c2f763f431f2e1c32",
"assets/images/gallery/portrait/20210114_111858_thumb.webp": "35eeb2881df18ae4913d4c4891588525",
"assets/images/gallery/portrait/20210709_093724.webp": "198b9d7305625626ed94e09b69bd73da",
"assets/images/gallery/portrait/20210907_161051.webp": "74f778a743441a538acd48cd24d103ed",
"assets/images/gallery/portrait/20210901_110336.webp": "37c1dbba4119fadcc83b06fc8f585813",
"assets/images/gallery/portrait/20201112_120634_thumb.webp": "fbeb37fa227729268973703bb76d5272",
"assets/images/gallery/portrait/20201112_112326_thumb.webp": "2c25f34b78e4dedc0aafeb48d3f5d009",
"assets/images/gallery/portrait/20201112_104612.webp": "0f4f12c08cc61be949b997c28750e8c9",
"assets/images/gallery/portrait/20210918_105104.webp": "d4d088d2e4d7a2fc0cc883158750aef5",
"assets/images/gallery/portrait/20210901_110316.webp": "62d68b1eba60128371be4aab59e2f7a1",
"assets/images/gallery/portrait/20210703_114205_thumb.webp": "ad709f7712cd4b35c76a37104627b4d1",
"assets/images/gallery/portrait/20200703_122216_thumb.webp": "9f02061c8200cff4724964bc464afd38",
"assets/images/gallery/portrait/20200703_122220.webp": "b242b9c32b2871ec955fbaeaa1dc5164",
"assets/images/gallery/portrait/20201112_120634.webp": "b0e413b8806b8618b7eff78faa357f10",
"assets/images/gallery/portrait/20210114_130013_thumb.webp": "20dbd23061bfd4b1c9f6b0bc705f9677",
"assets/images/gallery/portrait/20210901_110629_thumb.webp": "26e10e4bec8c406104dbe1a19f186616",
"assets/images/gallery/portrait/20210114_131809_thumb.webp": "9e3dde89604669236c180ac291255607",
"assets/images/gallery/portrait/20201112_101000.webp": "b5237eaf5415d012e3fca49ff0d844b3",
"assets/images/gallery/portrait/20211022_081949_thumb.webp": "2c19f641c7c59ac851da868b940181d4",
"assets/images/gallery/portrait/20201112_112404.webp": "80e5613d92c095a9c6f223396690cb45",
"assets/images/gallery/portrait/20210709_093733.webp": "9f737348af915355a92cce253cf91511",
"assets/images/gallery/portrait/20210114_111902_thumb.webp": "9f48d1a76bebcacb0e82869d0427ec7b",
"assets/images/gallery/portrait/20210709_093733_thumb.webp": "8b6a1baaba3a20137fcde55ec6aebab5",
"assets/images/gallery/portrait/20201112_101000_thumb.webp": "0c835eae265f014e139f141d8aa71088",
"assets/images/gallery/portrait/20210114_144538.webp": "2bd68a72648b121ee7f3c07e26a245bf",
"assets/images/gallery/portrait/20210907_161102.webp": "8e488a5657902a4610185753efe5bf17",
"assets/images/gallery/portrait/20210901_110340_thumb.webp": "c7057a10cd37860d56765481ac3aef97",
"assets/images/gallery/portrait/20210703_114205.webp": "54d2ac113d148ef04a2a75f64d7ff10a",
"assets/images/gallery/portrait/20210114_144538_thumb.webp": "e5c46e1a8803bda98928234fd2c1789e",
"assets/images/gallery/portrait/20210709_093705_thumb.webp": "cb7a7d0fa0f7bfd78ca55e3a2337fc42",
"assets/images/gallery/portrait/20201112_104612_thumb.webp": "ec573821b881b0c6c09485c225d0cb4c",
"assets/images/gallery/portrait/20200703_122216.webp": "f322c91896575acf64fc549257bc4d95",
"assets/images/gallery/portrait/20210918_112452_thumb.webp": "097444bef0b7e7139af1c921635cc374",
"assets/images/gallery/portrait/20210703_114202.webp": "b5ad240d436b292f326ab8c2e7a557aa",
"assets/images/gallery/portrait/20210114_131804.webp": "32d9440faea3621a33a0dcf24d831a6d",
"assets/images/gallery/portrait/20201112_112404_thumb.webp": "96f39815c9866841bf2a160a66aa4113",
"assets/images/gallery/portrait/20211021_145212_thumb.webp": "d0c0c21c122caf4775a08aae8f516461",
"assets/images/gallery/portrait/20210114_141802.webp": "1469c4d2875b53921ebdba6f3cee1243",
"assets/images/gallery/portrait/20210114_111902.webp": "b8ded42d94fd20a1bea63bda01101a75",
"assets/images/gallery/portrait/20210703_114203.webp": "a61fafa61f715df5a06146cbca5320e8",
"assets/images/gallery/portrait/20201119_100147_thumb.webp": "161883f960472cd3aca13b7b9bd0d57c",
"assets/images/gallery/portrait/20210901_110234_thumb.webp": "4000449b610ae7a475c5ba9fcbd0ff40",
"assets/images/gallery/portrait/20200703_122219_thumb.webp": "433b83235bf039d5098926d97ac7f183",
"assets/images/gallery/portrait/20210114_113656.webp": "2b602aec69d4a38adf892f21315aec19",
"assets/images/gallery/portrait/20210918_105104_thumb.webp": "031f5e14636e18e568ba1d2c69a73901",
"assets/images/gallery/portrait/20210918_105122_thumb.webp": "efe8eae580071e4f60d6c69abd1acd0e",
"assets/images/gallery/portrait/20210709_084059_thumb.webp": "eb65b7ad2a657a37e2c606681f4fbe17",
"assets/images/gallery/portrait/20210114_113707.webp": "c530b76efd2ee061a937cc221bb3be19",
"assets/images/gallery/portrait/20210901_110336_thumb.webp": "f936a92e2d155cc9dca12fc9ce5c6893",
"assets/images/gallery/portrait/20201112_103812.webp": "ee0056983cbc23f30c81260643abb2ec",
"assets/images/gallery/portrait/20210114_141802_thumb.webp": "c3d309f5d5a7df9f0f1aa5d64aff80ac",
"assets/images/gallery/portrait/20201112_112326.webp": "9476390ded3e7d9964d888cfcff99679",
"assets/images/gallery/portrait/20210114_113707_thumb.webp": "9324498b0a736860bb45a45a4b4ceb02",
"assets/images/gallery/portrait/20200703_122229_thumb.webp": "2aa6617580bc1dc96f690eee80169245",
"assets/images/gallery/portrait/20210901_110316_thumb.webp": "39517d94d15e26cb8e5d1cabc9f1a6a0",
"assets/images/gallery/portrait/20210728_110344.webp": "c5a61ea2933ac16729c253fe5a50a684",
"assets/images/gallery/portrait/20210907_161055.webp": "b8defab1c8cc9970670cdecc12da339e",
"assets/images/gallery/portrait/20210918_105122.webp": "d6ded2da951645c54ee7354351b88040",
"assets/images/gallery/portrait/20210114_111858.webp": "234f79533241320b42a87248bbb892de",
"assets/images/gallery/portrait/20210728_110233.webp": "33ecae2e9b7ab028ae2fb37c8d55b82d",
"assets/images/gallery/portrait/20210901_110605.webp": "a0707fcabd6fa18c8b887beb7db71301",
"assets/images/gallery/portrait/20210907_161102_thumb.webp": "c05882df3872e534eca3fc49d56cf93c",
"assets/images/gallery/portrait/20210703_114202_thumb.webp": "eb3fc515f63dfa06ad01a026f6816f37",
"assets/images/gallery/portrait/20210728_110226_thumb.webp": "61c5606962144f5f03a3d702ea3ec45f",
"assets/images/gallery/portrait/20211022_082327_thumb.webp": "3c37adacde441f5d54c63f13c71a82de",
"assets/images/gallery/portrait/20210114_140603_thumb.webp": "05ab073308d4abbbe22e8a117d5a78ef",
"assets/images/gallery/portrait/20210114_131757_thumb.webp": "1d07120cfea90f6de30fe9a4e8ee6a16",
"assets/images/gallery/portrait/20200703_122218_thumb.webp": "c0d8b483f0daf637d66174132c353a41",
"assets/images/gallery/portrait/20210703_114203_thumb.webp": "8909e1b4d3063ef6f691e913bbe0f12c",
"assets/images/gallery/portrait/20210114_131809.webp": "683bda1c0168015ff54bcabba76a987f",
"assets/images/gallery/portrait/20211021_145212.webp": "78bfbfbcef379d3a189421e5e6b65195",
"assets/images/gallery/portrait/20200703_122208_thumb.webp": "168b12327109658a1e985d6f4e91c30b",
"assets/images/gallery/portrait/20200703_122208.webp": "de83cc099b1a951613a16d23908a2be3",
"assets/images/gallery/portrait/20210901_110619.webp": "d274bf27424df409b7f4641e99127ff7",
"assets/images/gallery/portrait/20210901_110237.webp": "cb8f2fbfecca10d1d5b22cdb15087a96",
"assets/images/gallery/portrait/20210709_093705.webp": "323e1d4c0ef0956edd454324067dcc9d",
"assets/images/gallery/portrait/20210709_093724_thumb.webp": "5d746d704ab26a362c4558acd2639539",
"assets/images/gallery/portrait/20200703_122229.webp": "b87fecb95e95a91610430aafc4078caa",
"assets/images/gallery/portrait/20211022_082327.webp": "d5f8a8dbe9636bc0dc600e97bbfe6545",
"assets/images/gallery/portrait/20210901_110605_thumb.webp": "f2832fa1a3b56f9773668862a665029c",
"assets/images/gallery/portrait/20211022_081949.webp": "464e54217df618799aac480ae8dcb4f6",
"assets/images/gallery/portrait/20210709_093636.webp": "5b0c0bd79199a398663311b429dfb698",
"assets/images/gallery/portrait/20200703_122218.webp": "5d30a9dd4ab6b59ac21d44bc8cc0db93",
"assets/images/gallery/portrait/20210728_110226.webp": "a4deff019c8df71489fc7d2444ea444d",
"assets/images/gallery/portrait/20210709_093636_thumb.webp": "63b2e103bcf1a7b7ef35ffda656014af",
"assets/images/gallery/portrait/20211023_111603.webp": "439d1994467aac931eb4a60e5f457b28",
"assets/images/gallery/portrait/20210114_113656_thumb.webp": "d23bd2069787690bf89415623c6d88e6",
"assets/images/gallery/portrait/20211023_111603_thumb.webp": "47b8154023fe792ac9847a9765d07bf1",
"assets/images/gallery/portrait/20210901_110340.webp": "357ba97eca587ad9aa637b2588697384",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "6d3fe0eff93767aa280e710f396a44be",
"index.html": "3f453d4d407fa54d761d4948d91ba5f2",
"/": "3f453d4d407fa54d761d4948d91ba5f2",
"canvaskit/profiling/canvaskit.wasm": "2c16ab2af3d4fbad52da379264e260e8",
"canvaskit/profiling/canvaskit.js": "dfb57a8542220c772374503baaf2632c",
"canvaskit/canvaskit.wasm": "e58017ff67dd1419dbd7b720458fb1af",
"canvaskit/canvaskit.js": "9d49083c3442cfc15366562eb578b5f3",
"manifest.json": "31c54390a2740b4b84de2ee5116d0d5c"
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
