export default {
    fileName: `/lib.scripthost.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ninterface ActiveXObject{new (s:string):any;}declare var ActiveXObject:ActiveXObject;interface ITextWriter{Write(s:string):void ;WriteLine(s:string):void ;Close():void ;}interface TextStreamBase{/**\n * The column number of the current character position in an input stream.\n */Column:number;/**\n * The current line number in an input stream.\n */Line:number;/**\n * Closes a text stream.\n * It is not necessary to close standard streams; they close automatically when the process ends. If\n * you close a standard stream, be aware that any other pointers to that standard stream become invalid.\n */Close():void ;}interface TextStreamWriter extends TextStreamBase{/**\n * Sends a string to an output stream.\n */Write(s:string):void ;/**\n * Sends a specified number of blank lines (newline characters) to an output stream.\n */WriteBlankLines(intLines:number):void ;/**\n * Sends a string followed by a newline character to an output stream.\n */WriteLine(s:string):void ;}interface TextStreamReader extends TextStreamBase{/**\n * Returns a specified number of characters from an input stream, starting at the current pointer position.\n * Does not return until the ENTER key is pressed.\n * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n */Read(characters:number):string;/**\n * Returns all characters from an input stream.\n * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n */ReadAll():string;/**\n * Returns an entire line from an input stream.\n * Although this method extracts the newline character, it does not add it to the returned string.\n * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n */ReadLine():string;/**\n * Skips a specified number of characters when reading from an input text stream.\n * Can only be used on a stream in reading mode; causes an error in writing or appending mode.\n * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)\n */Skip(characters:number):void ;/**\n * Skips the next line when reading from an input text stream.\n * Can only be used on a stream in reading mode, not writing or appending mode.\n */SkipLine():void ;/**\n * Indicates whether the stream pointer position is at the end of a line.\n */AtEndOfLine:boolean;/**\n * Indicates whether the stream pointer position is at the end of a stream.\n */AtEndOfStream:boolean;}declare var WScript:{/**\n * Outputs text to either a message box (under WScript.exe) or the command console window followed by\n * a newline (under CScript.exe).\n */Echo(s:any):void ;/**\n * Exposes the write-only error output stream for the current script.\n * Can be accessed only while using CScript.exe.\n */StdErr:TextStreamWriter;/**\n * Exposes the write-only output stream for the current script.\n * Can be accessed only while using CScript.exe.\n */StdOut:TextStreamWriter;Arguments:{length:number;Item(n:number):string;};/**\n *  The full path of the currently running script.\n */ScriptFullName:string;/**\n * Forces the script to stop immediately, with an optional exit code.\n */Quit(exitCode?:number):number;/**\n * The Windows Script Host build version number.\n */BuildVersion:number;/**\n * Fully qualified path of the host executable.\n */FullName:string;/**\n * Gets/sets the script mode - interactive(true) or batch(false).\n */Interactive:boolean;/**\n * The name of the host executable (WScript.exe or CScript.exe).\n */Name:string;/**\n * Path of the directory containing the host executable.\n */Path:string;/**\n * The filename of the currently running script.\n */ScriptName:string;/**\n * Exposes the read-only input stream for the current script.\n * Can be accessed only while using CScript.exe.\n */StdIn:TextStreamReader;/**\n * Windows Script Host version\n */Version:string;/**\n * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.\n */ConnectObject(objEventSource:any,strPrefix:string):void ;/**\n * Creates a COM object.\n * @param strProgiID\n * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.\n */CreateObject(strProgID:string,strPrefix?:string):any;/**\n * Disconnects a COM object from its event sources.\n */DisconnectObject(obj:any):void ;/**\n * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.\n * @param strPathname Fully qualified path to the file containing the object persisted to disk.\n *                       For objects in memory, pass a zero-length string.\n * @param strProgID\n * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.\n */GetObject(strPathname:string,strProgID?:string,strPrefix?:string):any;/**\n * Suspends script execution for a specified length of time, then continues execution.\n * @param intTime Interval (in milliseconds) to suspend script execution.\n */Sleep(intTime:number):void ;};/**\n * WSH is an alias for WScript under Windows Script Host\n */declare var WSH: typeof WScript;/**\n * Represents an Automation SAFEARRAY\n */declare class SafeArray<T=any>{private constructor();private SafeArray_typekey:SafeArray<T>;}/**\n * Allows enumerating over a COM collection, which may not have indexed item access.\n */interface Enumerator<T=any>{/**\n * Returns true if the current item is the last one in the collection, or the collection is empty,\n * or the current item is undefined.\n */atEnd():boolean;/**\n * Returns the current item in the collection\n */item():T;/**\n * Resets the current item in the collection to the first item. If there are no items in the collection,\n * the current item is set to undefined.\n */moveFirst():void ;/**\n * Moves the current item to the next item in the collection. If the enumerator is at the end of\n * the collection or the collection is empty, the current item is set to undefined.\n */moveNext():void ;}interface EnumeratorConstructor{new <T=any>(safearray:SafeArray<T>):Enumerator<T>;new <T=any>(collection:{Item(index:any):T}):Enumerator<T>;new <T=any>(collection:any):Enumerator<T>;}declare var Enumerator:EnumeratorConstructor;/**\n * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.\n */interface VBArray<T=any>{/**\n * Returns the number of dimensions (1-based).\n */dimensions():number;/**\n * Takes an index for each dimension in the array, and returns the item at the corresponding location.\n */getItem(dimension1Index:number,...dimensionNIndexes:number[]):T;/**\n * Returns the smallest available index for a given dimension.\n * @param dimension 1-based dimension (defaults to 1)\n */lbound(dimension?:number):number;/**\n * Returns the largest available index for a given dimension.\n * @param dimension 1-based dimension (defaults to 1)\n */ubound(dimension?:number):number;/**\n * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,\n * each successive dimension is appended to the end of the array.\n * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]\n */toArray():T[];}interface VBArrayConstructor{new <T=any>(safeArray:SafeArray<T>):VBArray<T>;}declare var VBArray:VBArrayConstructor;/**\n * Automation date (VT_DATE)\n */declare class VarDate{private constructor();private VarDate_typekey:VarDate;}interface DateConstructor{new (vd:VarDate):Date;}interface Date{getVarDate:()=>VarDate;}`
};