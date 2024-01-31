SRC = src
BIN = bin
OBJ = obj
INC = inc
LIB = lib
TARGET_OBJ = test

CC       = g++
LIBS += -lgurux_dlms -lxml2
LDFLAGS += -L$(LIB)
CFLAGS += -Wall -g -I$(INC) -I/usr/include/libxml2
rm       = rm -f

objs := $(patsubst $(SRC)%.cpp,$(OBJ)%.o,$(wildcard $(SRC)/*.cpp))

all: $(BIN)/$(TARGET_OBJ)

$(BIN)/$(TARGET_OBJ): $(objs)
	@mkdir -p $(BIN)
	$(CC) $(LDFLAGS) -o $@ $(objs) $(LIBS)
	
$(objs): $(OBJ)/%.o: $(SRC)/%.cpp
	@mkdir -p $(OBJ)
	$(CC) -c $(CFLAGS) $< -o $@

.PHONEY: clean
clean:
	@$(rm) $(objs)
	@$(rm) $(BIN)/$(TARGET_OBJ)
	@echo "Cleanup complete!" 

