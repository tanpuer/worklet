set(NODE_ROOT ${CMAKE_CURRENT_SOURCE_DIR}/../../)

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)
link_directories("/usr/local/lib")
add_compile_options(
        -fexceptions
        -frtti
        -O3
        -Wno-unused-lambda-capture)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++17")

file(GLOB jsi_SRC CONFIGURE_DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/../jsi/jsi/*.cpp)
add_library(jsi STATIC ${jsi_SRC})
link_directories("/usr/local/lib")
target_include_directories(jsi PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/../jsi/ /usr/local/include)

##################
### jscruntime ###
##################
file(GLOB SOURCES_V8RUNTIME "${CMAKE_CURRENT_SOURCE_DIR}/*.cpp")
add_library(jscruntime STATIC
        ${SOURCES_V8RUNTIME}
)
add_definitions(-DRN_ON_MAIN_THREAD=1)
set(V8_INCLUDE_DIR "${NODE_ROOT}/third-party-ndk/v8/v8_node_v16.20.0")
target_include_directories(jscruntime PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/../jsi ${V8_INCLUDE_DIR})
link_directories("/usr/local/lib")
target_link_libraries(jscruntime v8_libbase v8_libplatform v8_monolith)