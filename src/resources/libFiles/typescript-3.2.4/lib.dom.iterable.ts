export default {
    fileName: `/lib.dom.iterable.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ninterface AudioParamMap extends ReadonlyMap<string,AudioParam>{}interface AudioTrackList{[Symbol.iterator]():IterableIterator<AudioTrack>;}interface CSSRuleList{[Symbol.iterator]():IterableIterator<CSSRule>;}interface CSSStyleDeclaration{[Symbol.iterator]():IterableIterator<string>;}interface ClientRectList{[Symbol.iterator]():IterableIterator<ClientRect>;}interface DOMRectList{[Symbol.iterator]():IterableIterator<DOMRect>;}interface DOMStringList{[Symbol.iterator]():IterableIterator<string>;}interface DOMTokenList{[Symbol.iterator]():IterableIterator<string>;entries():IterableIterator<[number,string]>;keys():IterableIterator<number>;values():IterableIterator<string>;}interface DataTransferItemList{[Symbol.iterator]():IterableIterator<DataTransferItem>;}interface FileList{[Symbol.iterator]():IterableIterator<File>;}interface FormData{[Symbol.iterator]():IterableIterator<[string,FormDataEntryValue]>;/**\n * Returns an array of key, value pairs for every entry in the list.\n */entries():IterableIterator<[string,FormDataEntryValue]>;/**\n * Returns a list of keys in the list.\n */keys():IterableIterator<string>;/**\n * Returns a list of values in the list.\n */values():IterableIterator<FormDataEntryValue>;}interface HTMLAllCollection{[Symbol.iterator]():IterableIterator<Element>;}interface HTMLCollectionBase{[Symbol.iterator]():IterableIterator<Element>;}interface HTMLCollectionOf<T extends Element>{[Symbol.iterator]():IterableIterator<T>;}interface HTMLFormElement{[Symbol.iterator]():IterableIterator<Element>;}interface HTMLSelectElement{[Symbol.iterator]():IterableIterator<Element>;}interface Headers{[Symbol.iterator]():IterableIterator<[string,string]>;/**\n * Returns an iterator allowing to go through all key/value pairs contained in this object.\n */entries():IterableIterator<[string,string]>;/**\n * Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.\n */keys():IterableIterator<string>;/**\n * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.\n */values():IterableIterator<string>;}interface MediaList{[Symbol.iterator]():IterableIterator<string>;}interface MimeTypeArray{[Symbol.iterator]():IterableIterator<Plugin>;}interface NamedNodeMap{[Symbol.iterator]():IterableIterator<Attr>;}interface NodeList{[Symbol.iterator]():IterableIterator<Node>;/**\n * Returns an array of key, value pairs for every entry in the list.\n */entries():IterableIterator<[number,Node]>;/**\n * Returns an list of keys in the list.\n */keys():IterableIterator<number>;/**\n * Returns an list of values in the list.\n */values():IterableIterator<Node>;}interface NodeListOf<TNode extends Node>{[Symbol.iterator]():IterableIterator<TNode>;/**\n * Returns an array of key, value pairs for every entry in the list.\n */entries():IterableIterator<[number,TNode]>;/**\n * Returns an list of keys in the list.\n */keys():IterableIterator<number>;/**\n * Returns an list of values in the list.\n */values():IterableIterator<TNode>;}interface Plugin{[Symbol.iterator]():IterableIterator<MimeType>;}interface PluginArray{[Symbol.iterator]():IterableIterator<Plugin>;}interface RTCStatsReport extends ReadonlyMap<string,any>{}interface SVGLengthList{[Symbol.iterator]():IterableIterator<SVGLength>;}interface SVGNumberList{[Symbol.iterator]():IterableIterator<SVGNumber>;}interface SVGStringList{[Symbol.iterator]():IterableIterator<string>;}interface SourceBufferList{[Symbol.iterator]():IterableIterator<SourceBuffer>;}interface SpeechGrammarList{[Symbol.iterator]():IterableIterator<SpeechGrammar>;}interface SpeechRecognitionResult{[Symbol.iterator]():IterableIterator<SpeechRecognitionAlternative>;}interface SpeechRecognitionResultList{[Symbol.iterator]():IterableIterator<SpeechRecognitionResult>;}interface StyleSheetList{[Symbol.iterator]():IterableIterator<StyleSheet>;}interface TextTrackCueList{[Symbol.iterator]():IterableIterator<TextTrackCue>;}interface TextTrackList{[Symbol.iterator]():IterableIterator<TextTrack>;}interface TouchList{[Symbol.iterator]():IterableIterator<Touch>;}interface URLSearchParams{[Symbol.iterator]():IterableIterator<[string,string]>;/**\n * Returns an array of key, value pairs for every entry in the search params.\n */entries():IterableIterator<[string,string]>;/**\n * Returns a list of keys in the search params.\n */keys():IterableIterator<string>;/**\n * Returns a list of values in the search params.\n */values():IterableIterator<string>;}interface VideoTrackList{[Symbol.iterator]():IterableIterator<VideoTrack>;}`
};