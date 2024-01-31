{
  'targets': [
    {
      'target_name': 'dlms_translator_utils_extension',
      'sources': [ 'dlms_translator_utils_wrapper.cpp' ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")","src/DLMS-Translator/inc/","/usr/include/libxml2/"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'libraries' : ["-L /home/legend/Documents/node_addon_api/src/lib -lgurux_dlms","-lxml2"],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'xcode_settings': {
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.7'
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      }
    }
  ]
}