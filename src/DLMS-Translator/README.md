This library is based on Gurux.DLMS.cpp and also depends on LibXML2.

The 'inc' directory contains the necessary DLMS header files; the system should install libxml2 manually.

Let me refer to the library as libgurux_dlms.so and it is build on the Ubuntu 22.04.3 LTS X86_64 system.

### Build test example
	make


### Clean test example
	make clean


### Run the test example
1. Add ./lib into the LD_LIBRARY_PATH 
	
	`export LD_LIBRARY_PATH=./lib`
	
	or or copy the ./lib/libgurux_dlms.so to /usr/local/lib
	
	`cp ./lib/libgurux_dlms.so to /usr/local/lib`

2. Run the test example

	`./bin/test`
