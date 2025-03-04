'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "95e637b7ca91e805c31b622d2658e8db",
"assets/AssetManifest.bin.json": "742857abbfa42464a7975ca1d19ef595",
"assets/AssetManifest.json": "acbc4eac9ce29420929744c7b799293a",
"assets/assets/fonts/YekanBakhFat.ttf": "28ac715d6bc1136c8390f137dc0d1de0",
"assets/assets/fonts/YekanBakhFat_english_number.ttf": "e1d06869ee86ac98052a5a1788122235",
"assets/assets/fonts/YekanBakhHeavy.ttf": "04251e45442fbe61bced94421f509fd2",
"assets/assets/fonts/YekanBakhHeavy_english_number.ttf": "3231c6a7b3ba5a66dd21bfc6b461165e",
"assets/assets/fonts/YekanBakhLight.ttf": "3d88f89b7b8d1d21d05d3c5a0625ab94",
"assets/assets/fonts/YekanBakhMedium.ttf": "1667b1f04f1c774c99cab5712a99b574",
"assets/assets/fonts/YekanBakhMedium_english_number.ttf": "2599bd836f9a77e57df6be05895041a2",
"assets/assets/images/png/01Syringe.png": "72e23ff6cce7319c25a9f1d7399917c9",
"assets/assets/images/png/03Capsule.png": "fbd9a5df67d352ee44c63332516d9083",
"assets/assets/images/png/Background.png": "68d4d0e6ac4a03dfb9e5dba619a5e53d",
"assets/assets/images/png/bookmarkLogo.png": "54c3b52df8582c519d13919527ca16a9",
"assets/assets/images/png/calender-dark.png": "7df48a897708fed326f1069e02e34682",
"assets/assets/images/png/camera_background.jpg": "d55c9bd064ee1600c62360e351b69d91",
"assets/assets/images/png/connect.png": "bb8b7e93a1b1ea81d4b1375dc1a9901f",
"assets/assets/images/png/delete_account_icon.png": "979fbcad59fadb84e295ff49e719086a",
"assets/assets/images/png/Earth-01.png": "ea25f888617166673a318ab51abb449a",
"assets/assets/images/png/edit.png": "4830dbb1076822c2fc7aedae27c1989d",
"assets/assets/images/png/exclamation_glass.png": "d88e99e1e0339abd7e457ac1599d44f7",
"assets/assets/images/png/favoriteLogo.png": "82fcfabd9b44809c1bdf980bfff7f7bd",
"assets/assets/images/png/health_record_header.jpg": "4afddf4b7e7124b1c012d27ae7874d39",
"assets/assets/images/png/health_record_main.jpg": "3bbd460a17e1e6814c41faaa68ecc6d3",
"assets/assets/images/png/icon_glass_close.png": "5b96df4286680386dccba60849d7b2f1",
"assets/assets/images/png/ic_alarm_time.png": "4c6b57038659afb8fca0a8d77bf6057b",
"assets/assets/images/png/ic_bg_slider_1.png": "07718de39622632f9be1bac35ebd7b1f",
"assets/assets/images/png/ic_bg_slider_2.png": "b214eef94ae7cdd2ff018b0213ec4d4f",
"assets/assets/images/png/ic_bg_slider_3.png": "229c7525414c4c5ca445b10e10d89c31",
"assets/assets/images/png/ic_bg_slider_4.png": "60cf3e3f1d76de8b6ccea34d4ca82807",
"assets/assets/images/png/ic_bg_slider_5.png": "067acdd8250a07500a853ff1cc582ba0",
"assets/assets/images/png/ic_bg_slider_6.png": "13dd28906eb9f0b7655510f9da3be95f",
"assets/assets/images/png/ic_reminder_check.png": "e12cd35926184d5e14225b7108b56005",
"assets/assets/images/png/ic_reminder_injection_red.png": "28f7cd06bf75f019ca457f1a0ed23a7a",
"assets/assets/images/png/ic_reminder_injection_white.png": "00fc3eb1e4288b16eda9efde7ca2bed5",
"assets/assets/images/png/ic_reminder_pill_red.png": "d70fe46d9fb65585f8e03ca8f278d1b1",
"assets/assets/images/png/ic_reminder_pill_white.png": "93361d0afea730c02b10b569d9dcc5fc",
"assets/assets/images/png/instagram.png": "ca8807b8e61b6e9c49177c4c88e3df4c",
"assets/assets/images/png/linkedin.png": "c71c49fece65a2adb6fd991586658753",
"assets/assets/images/png/liquid_loading.gif": "ad6081c3a4a6744081f60f743317fa50",
"assets/assets/images/png/logo-03.png": "24c5807f868cea63c30ca9d6d4e50780",
"assets/assets/images/png/logo_login.png": "c111aae690534d9880320f188a083ec3",
"assets/assets/images/png/man.png": "9ef76d477915075fa44cd22725f6d71b",
"assets/assets/images/png/Me-and-MS.png": "1032d3d70d6874778d3e2af38811ea2e",
"assets/assets/images/png/meAndMs.png": "58a6d90a42c05387894ce7199974d00e",
"assets/assets/images/png/meditation.jpg": "60e282e6fca61edd69b0333dea7c965b",
"assets/assets/images/png/meditation.png": "b88b83314ea21c0fe84394b4dab9a85e",
"assets/assets/images/png/Meditation1.png": "f0c5d09ea6c2bf7fb79c45929e210e3a",
"assets/assets/images/png/meditation_home.png": "31ac07da079d6efd0f48689a7ca99095",
"assets/assets/images/png/Moon-01.png": "ff5947d380cbbfaffeb7a0dacf628317",
"assets/assets/images/png/profile_confirmed.png": "7df3e915a851b98b220703cffadaa320",
"assets/assets/images/png/profile_not_confirmed.png": "ac94c2ae4069f2888c2b425f2517af0e",
"assets/assets/images/png/Rectangle-32.png": "b9e966cc1b550f787c144b48f460030e",
"assets/assets/images/png/Rectangle-39.png": "fd6d3f68f9df61b9169282f5b77d7de8",
"assets/assets/images/png/sms.png": "f1bad2ec8574d30825f5ebb9b59fd24b",
"assets/assets/images/png/splash-bg.png": "36d0a653126290da1ff6dfbb63f899f3",
"assets/assets/images/png/telegram.png": "d8b2885a751950c285469fa5d604be3b",
"assets/assets/images/png/time.png": "54734391f6b9019470870df8a7e9684c",
"assets/assets/images/png/trash_container.png": "b973afab6af60636432944e7b70bd2cc",
"assets/assets/images/png/trash_cover.png": "919ff01d6f355f8440946543f2c0c998",
"assets/assets/images/png/update_new.png": "2788d0b20a34c27bc1fd3a048f9c57ec",
"assets/assets/images/png/user_avatar.png": "1e8161a236e24a4c1a06ba2e33c910fb",
"assets/assets/images/png/Venus-01.png": "d661f600dacfc9fe903492a107a4515d",
"assets/assets/images/png/whatsapp.png": "a21b8b7927a773580d92854993f2c919",
"assets/assets/images/png/woman_image.png": "357b91dd85e50f2eb7ffec1f695c81e9",
"assets/assets/images/png/yoga.jpg": "85808340d2b5e39188f3ec6f596511f0",
"assets/assets/images/png/Yoga1.png": "28ad0d767a3c6c5b8db39713788d33fd",
"assets/assets/images/png/yoga_header.jpg": "d6c746a775eeed312bb6b97981d3071c",
"assets/assets/images/png/yoga_main.jpg": "e28940f2fa84dff9b4e671c1bc0b402e",
"assets/assets/logo.jpg": "b92c2cda192b7cad691af5beedcf7e5e",
"assets/assets/lotties/hug.json": "f27478f908e157d24cfc7f01205927ea",
"assets/assets/lotties/like.json": "999d98ec0af8f9e9bc2ad08c8a7de1d5",
"assets/assets/lotties/strong.json": "afed5fbf732205b9180970988604fa6c",
"assets/assets/privacy_and_policy.json": "c4f14662dbb34847dfab3dd471933b4e",
"assets/assets/vectors/svg/add-friend.svg": "f68330e4540f40440c08dd4fc3379bf4",
"assets/assets/vectors/svg/add-frindes.svg": "d922f95bbf2dc9f6852afc5aaa9d14de",
"assets/assets/vectors/svg/Add-frined.svg": "d922f95bbf2dc9f6852afc5aaa9d14de",
"assets/assets/vectors/svg/add.svg": "37babc5dfac4569a8a4db492cbeebd26",
"assets/assets/vectors/svg/add_camera.svg": "082f677bdf852eddf28158ede4d6f7ef",
"assets/assets/vectors/svg/age.svg": "88e7111c53efc96a04934ea62958eee0",
"assets/assets/vectors/svg/alarm.svg": "399a8793d5c0990251036205c664202a",
"assets/assets/vectors/svg/arrow_back.svg": "a817b5dbcbb659c294bffae968eb2557",
"assets/assets/vectors/svg/arrow_back_new.svg": "4d83a99fa99c52bcfb4c9f3d758e83c7",
"assets/assets/vectors/svg/arrow_down.svg": "41e6a50c04e5bf9769c9f119c40e240f",
"assets/assets/vectors/svg/arrow_right_new.svg": "be2c22000cc828d2dbf6c96a583fa19b",
"assets/assets/vectors/svg/attach.svg": "591f61a768b982cf58f86416e46e6e04",
"assets/assets/vectors/svg/back.svg": "af10d58933c6737bb6baa42c63c37558",
"assets/assets/vectors/svg/block.svg": "66ea03431d86143494103bc2f101c9be",
"assets/assets/vectors/svg/block_new.svg": "3f17c0ca8ffaf3fd92b9529051cc6c6e",
"assets/assets/vectors/svg/bookmark.svg": "324aff7984ea172281366da13d76c7c3",
"assets/assets/vectors/svg/bookmark1.svg": "2a5a382d7942fe0053974b9f3f65cedb",
"assets/assets/vectors/svg/bookmarks.svg": "7ae98836bb0a069c96f1aa75bca1d62b",
"assets/assets/vectors/svg/bookmark_new.svg": "1d2746faf1c257a8f9295b98c4e48593",
"assets/assets/vectors/svg/calendar.svg": "36687a6ecd6d91945d1a3e2b0911f538",
"assets/assets/vectors/svg/camera.svg": "4e5bfc31797c05499163e208c8d493eb",
"assets/assets/vectors/svg/cameraIcon.svg": "b7be9c513d529985fc3539edd3ccc21a",
"assets/assets/vectors/svg/cancel.svg": "18c07b418ab81c3801569d11cb67b4e2",
"assets/assets/vectors/svg/cancel_friendShip_new.svg": "2523f42eecd8324eacb9e91ad0b27172",
"assets/assets/vectors/svg/capsule.svg": "0b5b520a95dca1515c17704645ba48ff",
"assets/assets/vectors/svg/chat.svg": "42e481e9864be0419f6e23e038c54de5",
"assets/assets/vectors/svg/check.svg": "9b73c3df05176d3840f486c8875d654d",
"assets/assets/vectors/svg/check_mark.svg": "888a686dbd8ec3e62b3bd655f8c20a24",
"assets/assets/vectors/svg/check_new.svg": "098d2115402972f26295b5764cf27cbb",
"assets/assets/vectors/svg/city.svg": "72c24a467c7fc3d8627b519455f54445",
"assets/assets/vectors/svg/clamp.svg": "ebeb56d5c9747bfce4ed49ea987a5c80",
"assets/assets/vectors/svg/clock.svg": "b719d2c7e21290e2ee5c1d5ed38eb631",
"assets/assets/vectors/svg/Close%2520Square.svg": "915b9c67c86115fc81c75bc2c7df05aa",
"assets/assets/vectors/svg/close.svg": "18c07b418ab81c3801569d11cb67b4e2",
"assets/assets/vectors/svg/close1.svg": "30fb587c854497405de2f9ff1e205e0a",
"assets/assets/vectors/svg/close_new_design.svg": "d03d711b88b3d41f2817dc9e5627ccc3",
"assets/assets/vectors/svg/comment.svg": "18dde2da67c89dbf11ecb091653d2e99",
"assets/assets/vectors/svg/contacts.svg": "fb407e82fe7335c7a3c8161534e735f6",
"assets/assets/vectors/svg/copy.svg": "074348e9e095139add0ce1504fe27ee2",
"assets/assets/vectors/svg/create_group.svg": "5195680f2082d678e195c9d42035729b",
"assets/assets/vectors/svg/create_group_icon.svg": "5195680f2082d678e195c9d42035729b",
"assets/assets/vectors/svg/create_private_conversation.svg": "9a5a3abc123b1b19e4cc83babd78b337",
"assets/assets/vectors/svg/delete-friend.svg": "3ee6779f4c6af786f389abf7bef65074",
"assets/assets/vectors/svg/delete_account.svg": "328ca50624047ac231e94dd2c1fb441f",
"assets/assets/vectors/svg/disconnect.svg": "0bd4f39294b971e23e13c9df1510fe77",
"assets/assets/vectors/svg/done.svg": "8d0987ce165167dfc6dc626ef9776993",
"assets/assets/vectors/svg/Dose.svg": "d7cee98de10624e068a83308a304f5a2",
"assets/assets/vectors/svg/doubleArrowBack.svg": "9d8d3d05ca7c862d10b96d9fc2291a27",
"assets/assets/vectors/svg/doubleArrowForward.svg": "49870555a5f2e226fd99b538d51c7c46",
"assets/assets/vectors/svg/download.svg": "4fd151d571383fe80ec2c61bd5eaf396",
"assets/assets/vectors/svg/downloadIcon.svg": "17a4355eb5ca1f06763ac0163270f7f3",
"assets/assets/vectors/svg/drop.svg": "e090132fe437e2bf3fa13c1ddfb0f077",
"assets/assets/vectors/svg/edit-pen.svg": "0fea307bbd5c7a39063e5f58ad41d4ae",
"assets/assets/vectors/svg/edit.svg": "869daaa6c40968f9975f74b800c90953",
"assets/assets/vectors/svg/edit_pen.svg": "e2b8bb2fbfe8b87130a0e4bf7f018ed0",
"assets/assets/vectors/svg/exclamation_new.svg": "ca0c86876a380d9cf58372d39ace0622",
"assets/assets/vectors/svg/eye.svg": "8cb0f0b6b063693036180fb7b869a5b5",
"assets/assets/vectors/svg/filter-new.svg": "b82e96587923f8b5dfddbbdce3f5f2b6",
"assets/assets/vectors/svg/filter.svg": "35c85b97acf7d4fff5701a8c7f338a92",
"assets/assets/vectors/svg/filterIcon.svg": "b82e96587923f8b5dfddbbdce3f5f2b6",
"assets/assets/vectors/svg/filters.svg": "b82e96587923f8b5dfddbbdce3f5f2b6",
"assets/assets/vectors/svg/filter_selected.svg": "ca5b02f1181c8a396b8c534d661a3544",
"assets/assets/vectors/svg/following.svg": "244ec4e7eb2e793f13aff4b0931e3bb4",
"assets/assets/vectors/svg/friends_new.svg": "bea6723b6177562617df939b1a255e2a",
"assets/assets/vectors/svg/gallery.svg": "169dcfa3f3f1389cbda11c1eff3004f9",
"assets/assets/vectors/svg/game.svg": "53fef5bca5da391af43d34dc92f505b7",
"assets/assets/vectors/svg/gender.svg": "0b3e808f8c37f8692508ee1e4c67219c",
"assets/assets/vectors/svg/gift.svg": "950994850e4bc6f099f9788d7e90a70a",
"assets/assets/vectors/svg/gradient_camera.svg": "f035f2f33230cfe0153caffdccffa4ba",
"assets/assets/vectors/svg/Group%2520476.svg": "215724bf35e0da6ff61b0edf23c9f0d2",
"assets/assets/vectors/svg/Group%2520549.svg": "dfc5cf18517161ad50f8970c0521d5b7",
"assets/assets/vectors/svg/Group%2520965.svg": "06e0028149d971cc62b6afecf4d42d41",
"assets/assets/vectors/svg/health_record.svg": "8d056c91386266673a951051b25c3f1e",
"assets/assets/vectors/svg/health_record_new.svg": "8c563a95023a9960951a2e4a3824c0c1",
"assets/assets/vectors/svg/heart.svg": "0e89b85653f441fde9041ca5d3193144",
"assets/assets/vectors/svg/height.svg": "93d86110260d557de77613ef6c47a69c",
"assets/assets/vectors/svg/home.svg": "bc540f488e7243f33111b12133c84c47",
"assets/assets/vectors/svg/hours-square.svg": "83dc1ae41865ca566fc484aaf8dd7ee4",
"assets/assets/vectors/svg/Iconly-Bold-Calendar.svg": "6c4007ab29d500dbc7908a298f6478b8",
"assets/assets/vectors/svg/Iconly-Bold-Location.svg": "ae83e0385e6dbfd8a7dc7e3565ed01ff",
"assets/assets/vectors/svg/Iconly-Light-3%2520User.svg": "f27d8938bb32cdf4f70bda597e225a02",
"assets/assets/vectors/svg/Iconly-Light-Close-Square.svg": "915b9c67c86115fc81c75bc2c7df05aa",
"assets/assets/vectors/svg/Iconly-Light-Notification.svg": "36c34cc3303d9bf7b5e969fc8da92f60",
"assets/assets/vectors/svg/Iconly-Light-Star.svg": "f8e9d2833bf6f699bf1f92bf22b0fc89",
"assets/assets/vectors/svg/Iconly-Light-Tick-Square.svg": "3ed1ef11f9bcb5c379485898c57cbe0b",
"assets/assets/vectors/svg/ic_about_us_1.svg": "9e510c754efbafcbab1c746a1c53ddef",
"assets/assets/vectors/svg/ic_about_us_2.svg": "49e33100ccc86f788a40129e969f50b6",
"assets/assets/vectors/svg/ic_about_us_3.svg": "594cb501822bcdc1cad9279bde86fc3e",
"assets/assets/vectors/svg/ic_about_us_4.svg": "4b549d4db42f209a72f02d356a8f9f16",
"assets/assets/vectors/svg/ic_about_us_5.svg": "9a2225210a6e4a1eda6856bb28a0261d",
"assets/assets/vectors/svg/ic_base_page_bell.svg": "01e35e3cb60644baa820c449e3cde451",
"assets/assets/vectors/svg/ic_base_page_brain.svg": "7b8f5b749cbdba2c9905b110f5dd41d0",
"assets/assets/vectors/svg/ic_base_page_menu.svg": "db0361191d788702a16de23f670675b2",
"assets/assets/vectors/svg/ic_category_1.svg": "179c679100b5a14b7f2b2859326efa63",
"assets/assets/vectors/svg/ic_category_2.svg": "747dfac569df93c299724a8ad5c3e8b7",
"assets/assets/vectors/svg/ic_category_3.svg": "41b53070f5096a83a81f4325c881a66e",
"assets/assets/vectors/svg/ic_category_4.svg": "621a33222ad6680a2cf6288317167d5d",
"assets/assets/vectors/svg/ic_category_5.svg": "dc3370bc037c1bcbf041856e559ab0b9",
"assets/assets/vectors/svg/ic_category_6.svg": "339fc89fa5602fdc65e69cd4b9f6416b",
"assets/assets/vectors/svg/ic_category_7.svg": "d36ef1590adc9e6df9ab5ac13666d702",
"assets/assets/vectors/svg/ic_check_mark.svg": "18dc8a6aa6769022367c6648bd1ec192",
"assets/assets/vectors/svg/ic_chevron_down_rounded.svg": "ed6f7af55454d2bb045018443b461632",
"assets/assets/vectors/svg/ic_chevron_down_simple.svg": "c06e71c9ff5ae234d743c4f48d8d5fb5",
"assets/assets/vectors/svg/ic_chevron_up_simple.svg": "cbd8deaf44f05594640af6f5502151b7",
"assets/assets/vectors/svg/ic_close.svg": "7eeae424bd914aa2d87766e9aeb60369",
"assets/assets/vectors/svg/ic_drawer_1.svg": "32c6dae31cd111f612c6cec09cf5f188",
"assets/assets/vectors/svg/ic_drawer_2.svg": "9e1739003da01b8e59b3a76c68ea4546",
"assets/assets/vectors/svg/ic_drawer_3.svg": "05585ada9d5c454c27f054d62e0738cc",
"assets/assets/vectors/svg/ic_drawer_4.svg": "d36ef1590adc9e6df9ab5ac13666d702",
"assets/assets/vectors/svg/ic_drawer_5.svg": "ba2f8bcccd8e3a723b0056a7a46255df",
"assets/assets/vectors/svg/ic_home.svg": "9d90f0e2ef44be853e8c593f5c1de0d5",
"assets/assets/vectors/svg/ic_home_warning.svg": "20446ca539854b650e268be79a5c5103",
"assets/assets/vectors/svg/ic_index.svg": "6c47f875dbcae2e0532bd33e88049d4b",
"assets/assets/vectors/svg/ic_notification_date.svg": "cc5395522074af62b0a9edb081ec7c4e",
"assets/assets/vectors/svg/ic_no_signal.svg": "9318c1bc2bfd288fd18851f95e5077ad",
"assets/assets/vectors/svg/ic_player_next.svg": "5198a6d92a550c0ab8f42e164d5cdcd3",
"assets/assets/vectors/svg/ic_player_previous.svg": "c5b725727d06283dd4df6d2c3ce3857c",
"assets/assets/vectors/svg/ic_reminder_item_clock.svg": "c30abce1de3eba24c887c075adfde0f5",
"assets/assets/vectors/svg/ic_settings_1.svg": "b902651e5e745bfca225f7d567452386",
"assets/assets/vectors/svg/ic_settings_2.svg": "65030bc7d3b30cbd89757710ba94405b",
"assets/assets/vectors/svg/ic_settings_3.svg": "783a172f544c34747837dd3ab10366e2",
"assets/assets/vectors/svg/ic_settings_4.svg": "b665eb7f417a46e37869c66874a5dc82",
"assets/assets/vectors/svg/ic_settings_5.svg": "be3c829470ed64c8d241da59140fceb2",
"assets/assets/vectors/svg/ic_settings_6.svg": "43ef6d430bf3a00ab230c8450c742117",
"assets/assets/vectors/svg/ic_setting_font.svg": "c81d2b155380c63c0588fe455ec0891b",
"assets/assets/vectors/svg/ic_setting_storage.svg": "b0453cf3221766fe4e7dd80b10c72138",
"assets/assets/vectors/svg/ic_slider_1.svg": "a0c377d907e851ab871b4dc9404b5e7b",
"assets/assets/vectors/svg/ic_slider_2.svg": "db12c3f0ed936a65b604e2b1d0b5736a",
"assets/assets/vectors/svg/ic_slider_3.svg": "deda6967edb0868de06e0eb675ac355f",
"assets/assets/vectors/svg/ic_slider_4.svg": "62aa22d626efe06667be6282ad592475",
"assets/assets/vectors/svg/ic_slider_5.svg": "a84782a4c31f83f477afc0f127c8635f",
"assets/assets/vectors/svg/ic_slider_6.svg": "ed7d3991cb7b61027dae4c5f720621ce",
"assets/assets/vectors/svg/ic_social_media_1.svg": "c6145dece516b90fe4ed12518b38610e",
"assets/assets/vectors/svg/ic_social_media_2.svg": "a2efd0e24c5a8aaf6b581de5d7ba4210",
"assets/assets/vectors/svg/ic_social_media_3.svg": "f227e8e97e3703f8397422edf2da789a",
"assets/assets/vectors/svg/ic_social_media_4.svg": "d9de3c14532378cce3eab43854a3c29d",
"assets/assets/vectors/svg/ic_social_media_5.svg": "d9a6e1e2101f28e4c8bcfe8fd4909a9d",
"assets/assets/vectors/svg/ic_tick.svg": "c1010e02a3ad094295f7b798678b6a67",
"assets/assets/vectors/svg/ic_video_player_chevron_left.svg": "867dc61decd96c014852585b91e9a2d9",
"assets/assets/vectors/svg/ic_video_player_chevron_right.svg": "4c346b97ee398b851506f31662f4fce1",
"assets/assets/vectors/svg/ic_video_player_full_screen.svg": "ecdeb211be262a36794a72d57f7b331d",
"assets/assets/vectors/svg/ic_yoga_bookmark.svg": "324aff7984ea172281366da13d76c7c3",
"assets/assets/vectors/svg/ic_yoga_download.svg": "4fd151d571383fe80ec2c61bd5eaf396",
"assets/assets/vectors/svg/ic_yoga_like.svg": "8186d106d18bcd8aac5a7f1eba28605d",
"assets/assets/vectors/svg/identity_card.svg": "d35ea8e7c9ba128ef37f268ca75a8390",
"assets/assets/vectors/svg/info-new.svg": "051c064429df20d69293f1498cf7ac61",
"assets/assets/vectors/svg/info-square.svg": "051c064429df20d69293f1498cf7ac61",
"assets/assets/vectors/svg/info.svg": "df030f38adb5bf3107a5b60e9fb7ec00",
"assets/assets/vectors/svg/information_new.svg": "72395c3ffc923a111ec229405284c165",
"assets/assets/vectors/svg/info_input.svg": "e41aa1f9c30b2908f8c9107c521a4cf2",
"assets/assets/vectors/svg/injection.svg": "1a427c5cdab62a5566af2c113a5c72e2",
"assets/assets/vectors/svg/invite_friend.svg": "72d4d1be5231e99b4e9eba3eb3b4e9dc",
"assets/assets/vectors/svg/leader_board_brain.svg": "93e73ebf60a8c88789e36dbfb419d1ba",
"assets/assets/vectors/svg/Light-Notification.svg": "36c34cc3303d9bf7b5e969fc8da92f60",
"assets/assets/vectors/svg/location.svg": "5671235f26c2e415281c3f13828267d3",
"assets/assets/vectors/svg/location_new.svg": "0786e1dd88c227bab3ef084681590de2",
"assets/assets/vectors/svg/logo.svg": "f4955dfdb650b8e4e9453ebb0fb0735a",
"assets/assets/vectors/svg/marital.svg": "323cce0a4f6e42ea7ed3e1366633ef7a",
"assets/assets/vectors/svg/marital1.svg": "a38a8c4aee220ef371e197768c05ac07",
"assets/assets/vectors/svg/marital2.svg": "a38a8c4aee220ef371e197768c05ac07",
"assets/assets/vectors/svg/marital_new.svg": "0b83061fe88917fc5103c2feea8405f7",
"assets/assets/vectors/svg/medal.svg": "9c3b24bd45620708873a404d110c8a6d",
"assets/assets/vectors/svg/meditation.svg": "db61e9fca90caf16a30fc4f9abaa2e09",
"assets/assets/vectors/svg/message.svg": "204230f9187112300639d222be3b217f",
"assets/assets/vectors/svg/me_and_ms_icon.svg": "200bc76cf55911182672335f96278697",
"assets/assets/vectors/svg/microphone.svg": "eed90ac3ed2f74f7f51c418caa5d91d3",
"assets/assets/vectors/svg/minus.svg": "d68387858e506017526808d151151275",
"assets/assets/vectors/svg/moon.svg": "b330544a819977bceb2821761e10fee6",
"assets/assets/vectors/svg/more_new.svg": "e0a12d70b71371e4311ab5964dadbcd8",
"assets/assets/vectors/svg/mute.svg": "51bcfb49c2ef3c20925e85f54240cf44",
"assets/assets/vectors/svg/myelin_logo.svg": "8f4664e2a7f05787d824135fd3f2e4c4",
"assets/assets/vectors/svg/next.svg": "0634e465819ce1476fd7d96ed209d750",
"assets/assets/vectors/svg/note-other.svg": "753e036fe53f54849a3471d08d3a2006",
"assets/assets/vectors/svg/note.svg": "753e036fe53f54849a3471d08d3a2006",
"assets/assets/vectors/svg/off.svg": "dced5170452aea378a04262def333240",
"assets/assets/vectors/svg/open_camera.svg": "9f00bbd795006d0a205f6df01307ce8f",
"assets/assets/vectors/svg/open_gallery.svg": "c5e19b1ee9814d5ca9c11a8f1a58ce3b",
"assets/assets/vectors/svg/Path%2520251.svg": "0f991f1737c9a3d79d6af38d06a6b131",
"assets/assets/vectors/svg/pen.svg": "91753dd88e277c7d28bd141257d76f2f",
"assets/assets/vectors/svg/pen_new.svg": "93df9bfe06ad1a16fc17d1a8f3c5233f",
"assets/assets/vectors/svg/percent.svg": "24d8dfd6a7188b8e01ec2d6d7211998c",
"assets/assets/vectors/svg/person.svg": "ee3ae70a685884c32c7ddcf94d991c1f",
"assets/assets/vectors/svg/person_check.svg": "49a234fc4d353ee715077797dbb1c3ba",
"assets/assets/vectors/svg/phone.svg": "57d872360dcc8c787e24631030669ad2",
"assets/assets/vectors/svg/picture.svg": "c387fcddb1481d0c9c8d8d8d72a4c842",
"assets/assets/vectors/svg/pill.svg": "67bbc091f86f9a99dc4acf1270715892",
"assets/assets/vectors/svg/plus.svg": "58e3d0172f1eeadcb86ce2fa26e480d2",
"assets/assets/vectors/svg/point_border.svg": "bb6fc5f9e856d8a2c41a213954fca1a3",
"assets/assets/vectors/svg/previous.svg": "0ae3c43594461a57177b200042dd387c",
"assets/assets/vectors/svg/profile.svg": "5676a615dc711325ade49469e089ed98",
"assets/assets/vectors/svg/profile_setting_icon.svg": "db473afa40cab1d0c896c8d41a398fb8",
"assets/assets/vectors/svg/Question-mark.svg": "dc3d880198dc2f8f4e9b24d404685c44",
"assets/assets/vectors/svg/refresh.svg": "d08cb8e000b8433f2bff3b8f4ebbda79",
"assets/assets/vectors/svg/report.svg": "28f387a169faf8b674074e202a1b0eb2",
"assets/assets/vectors/svg/request_friend_new.svg": "7b70080dc45349c507fceff1791277e8",
"assets/assets/vectors/svg/Right%2520Arrow%25201.svg": "1e76bcdf9c8491adc5ba731be451ead5",
"assets/assets/vectors/svg/search.svg": "bffe694cbec05c83ec2d9cc541835e00",
"assets/assets/vectors/svg/seen.svg": "f8dca0a2b0aa1c92e741872cd3616eb2",
"assets/assets/vectors/svg/seen_count.svg": "5cd8a21a3a12dcdfff48c76036ecc4bb",
"assets/assets/vectors/svg/select.svg": "b9303f94d75e762cd2c7758ef52f2e12",
"assets/assets/vectors/svg/send.svg": "ecea1fca8687f69dfe5048c1df6c2765",
"assets/assets/vectors/svg/sendMessage_new.svg": "d660b4496d015f21d38dd1ea133f830a",
"assets/assets/vectors/svg/settings_new.svg": "01571463239df20d677e048444fca21e",
"assets/assets/vectors/svg/share.svg": "33f4d0d46803dd3fe8d37afbeb031dce",
"assets/assets/vectors/svg/simple_calendar.svg": "36687a6ecd6d91945d1a3e2b0911f538",
"assets/assets/vectors/svg/siting.svg": "294a89c2e5a0078faa922e8565bf279a",
"assets/assets/vectors/svg/sleeping.svg": "7af3892310cd4ae271a2cb21db448ffd",
"assets/assets/vectors/svg/smaile.svg": "477e9b727004510c604b7602159a0fb0",
"assets/assets/vectors/svg/smile.svg": "844d5c717f097f79da69d77c3d1ca3ed",
"assets/assets/vectors/svg/standing.svg": "06d1fa144e358f746c6fa146f572ecf1",
"assets/assets/vectors/svg/star.svg": "36dd90867904d52d3e014f3bf4644f11",
"assets/assets/vectors/svg/star_outline.svg": "0f956b22cdb4b3986a217cdac4e7fa6c",
"assets/assets/vectors/svg/syrup.svg": "fc2fc1d1f961a1f13d3990e18f70215f",
"assets/assets/vectors/svg/text_size_setting_icon.svg": "7e399ead1a25d983b7c657fc5bf0fdcb",
"assets/assets/vectors/svg/ticket.svg": "c860057fce18e4f1bbcc6731a915399a",
"assets/assets/vectors/svg/time-Square.svg": "42bd9f9a6ffbec2525fbed80df98114e",
"assets/assets/vectors/svg/time.svg": "d2429720889775dac8351cb9089b4ac7",
"assets/assets/vectors/svg/trash.svg": "c90c6fb23ce9f090f359bd51637e0bc9",
"assets/assets/vectors/svg/type.svg": "07bab7886d88423a46f90127c6e549bb",
"assets/assets/vectors/svg/typeOfMs.svg": "92114ba6f1eb4d6d9890e75c87c9b012",
"assets/assets/vectors/svg/typeOfMs2.svg": "92114ba6f1eb4d6d9890e75c87c9b012",
"assets/assets/vectors/svg/Union%25202.svg": "a305c36ee7564de27c8c3e78d4bad7f7",
"assets/assets/vectors/svg/user.svg": "7dc3c27c3a2430e1cbf21c1188762214",
"assets/assets/vectors/svg/VolumeLine.svg": "430533f42581b6d9ee6c9e6c3dd0d61f",
"assets/assets/vectors/svg/waiting.svg": "60c84b80253e3ee97c514f60060f915e",
"assets/assets/vectors/svg/Warning.svg": "de9896b88290c16c35406c301add57a2",
"assets/assets/vectors/svg/weight.svg": "5775f3473e478a3dce5dbbabf288db17",
"assets/assets/vectors/svg/yoga_icon.svg": "0c9deab83a5be0be123ec61840dc900b",
"assets/FontManifest.json": "333eb3acb9d92ed384e4437ab8a21710",
"assets/fonts/MaterialIcons-Regular.otf": "c3468d93834e3a313824376f72c743a4",
"assets/NOTICES": "4361085adefee784fb3f2d1573020871",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/mapyCz.svg": "f5a198b01f222b1201e826495661008c",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "957da7effbb2e5ea823445620719cc5c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "488e77eece7363d648d8aacc20c5fac3",
"icons/apple-touch-icon.png": "1c57d0e02228ce19a29a8cf477f4d74f",
"icons/Icon-192.png": "44aa50b0d22733dc119b3eebaa011fab",
"icons/Icon-512.png": "f0ff7cc5fa4dfe1fb35b9488b654b0e0",
"index.html": "7fb07533cc881893f76bf49c28096797",
"/": "7fb07533cc881893f76bf49c28096797",
"main.dart.js": "ee5f81bd68484eec1888884b197d98f0",
"manifest.json": "56aacadfed82c7c429c5555bd5670e0f",
"manifest.webmanifest": "56aacadfed82c7c429c5555bd5670e0f",
"script.js": "ecc7f349c2ac659424504b585783f079",
"sw.js": "58db392f967447a46640d85376733fc2",
"version.json": "098e6df406a0e7f7c39024d72e8e8f72"};
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
