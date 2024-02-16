{
  "targets": [
    {
      "target_name": "worklet",
      "sources": [
           "src/worklet_entry.cpp",
        ],
      "include_dirs": [
            "<!(node -p \"require('node-addon-api').include_dir\")"
      ],
      "defines": [

      ],
      'link_settings': {
#         "libraries": [ "-Wl,-rpath,@loader_path/../../agil/heron/src/agil"],
      },
      "conditions": [
          ["OS==\"mac\"", {
              "libraries": [
                  "<(module_root_dir)/agil/third-party-ndk/v8jsi/libjsi.a",
                  "<(module_root_dir)/agil/third-party-ndk/v8jsi/libjscruntime.a",
                  "<(module_root_dir)/agil/libnodeworklet.a",
              ],
              "include_dirs": [

                #third_party
                "/usr/local/include",
                "../third-party-ndk/v8jsi",
                "../third-party-ndk/jsi",

                #worklet
                "../worklet",
                "../worklet/reanimated"

              ],
              "xcode_settings": {
                "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
                "OTHER_CFLAGS": [
                "-std=c++17",
              ],
              }
          }]
        ],
    }
  ]
}