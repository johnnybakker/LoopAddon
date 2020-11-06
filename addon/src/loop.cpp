#include <node.h>
#include <iostream>

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using v8::Number;
using v8::Exception;

void LoopMethod(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = args.GetIsolate();
	
	if(args.Length() == 0) {
		isolate->ThrowException(
			Exception::TypeError(
				String::NewFromUtf8(isolate,"Wrong number of arguments")));
		
		return;
	}

	if(!args[0]->IsNumber()){
		isolate->ThrowException(
			Exception::TypeError(
				String::NewFromUtf8(isolate,"First argument is not a number")));
		
		return;
	}
	

	int length = args[0].As<Number>()->Value(); 
	int counter = 0;

	for(int i = 0; i < length; i++)
		counter++;

	//std::cout << "I've looped " << counter << " times in c++" << std::endl;
}

void Initialize(Local<Object> exports) {
	NODE_SET_METHOD(exports, "loop", LoopMethod);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)