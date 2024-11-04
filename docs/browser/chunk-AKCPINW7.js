import{a as te,h as De,i as we,j as Ee}from"./chunk-DEXZKXLL.js";import{$a as ee,Aa as Q,Da as k,Ea as A,Ia as T,Ka as x,La as ge,Ma as r,N as X,Na as o,Oa as p,P as Y,Pa as R,Qa as f,R as y,Ra as m,Va as a,W as fe,Wa as _,X as K,Xa as _e,Y as C,Ya as G,Za as B,_a as H,a as c,ab as ve,b as h,ba as pe,bb as ye,ca as b,da as V,db as Ce,ea as g,fa as O,ga as me,h as ue,jb as be,k as de,ka as j,na as J,ob as Ve,p as ce,pb as U,qb as v,v as he,wa as u,xa as d}from"./chunk-DEKCMHLB.js";var Ne=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(d(Q),d(J))}}static{this.\u0275dir=C({type:i})}}return i})(),Ze=(()=>{class i extends Ne{static{this.\u0275fac=(()=>{let t;return function(s){return(t||(t=me(i)))(s||i)}})()}static{this.\u0275dir=C({type:i,features:[A]})}}return i})(),Oe=new y("");var Xe={provide:Oe,useExisting:X(()=>z),multi:!0};function Ye(){let i=te()?te().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ke=new y(""),z=(()=>{class i extends Ne{constructor(t,n,s){super(t,n),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ye())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(d(Q),d(J),d(Ke,8))}}static{this.\u0275dir=C({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){n&1&&f("input",function(M){return s._handleInput(M.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(M){return s._compositionEnd(M.target.value)})},features:[ee([Xe]),A]})}}return i})();var Je=new y(""),Qe=new y("");function je(i){return i!=null}function ke(i){return Ce(i)?de(i):i}function Te(i){let e={};return i.forEach(t=>{e=t!=null?c(c({},e),t):e}),Object.keys(e).length===0?null:e}function Re(i,e){return e.map(t=>t(i))}function et(i){return!i.validate}function Ge(i){return i.map(e=>et(e)?e:t=>e.validate(t))}function tt(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){return Te(Re(t,e))}}function Be(i){return i!=null?tt(Ge(i)):null}function it(i){if(!i)return null;let e=i.filter(je);return e.length==0?null:function(t){let n=Re(t,e).map(ke);return he(n).pipe(ce(Te))}}function He(i){return i!=null?it(Ge(i)):null}function Me(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function nt(i){return i._rawValidators}function rt(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function W(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ae(i,e){let t=ie(e);return ie(i).forEach(s=>{W(t,s)||t.push(s)}),t}function xe(i,e){return ie(e).filter(t=>!W(i,t))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},ne=class extends ${get formDirective(){return null}get path(){return null}},N=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},re=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Yt=h(c({},ot),{"[class.ng-submitted]":"isSubmitted"}),Ue=(()=>{class i extends re{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(d(N,2))}}static{this.\u0275dir=C({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){n&2&&ge("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[A]})}}return i})();var F="VALID",L="INVALID",D="PENDING",S="DISABLED",E=class{},q=class extends E{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends E{constructor(e,t){super(),this.pristine=e,this.source=t}},P=class extends E{constructor(e,t){super(),this.touched=e,this.source=t}},w=class extends E{constructor(e,t){super(),this.status=e,this.source=t}};function st(i){return(Z(i)?i.validators:i)||null}function at(i){return Array.isArray(i)?Be(i):i||null}function lt(i,e){return(Z(e)?e.asyncValidators:i)||null}function ut(i){return Array.isArray(i)?He(i):i||null}function Z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var oe=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=U(()=>this.statusReactive()),this.statusReactive=k(void 0),this._pristine=U(()=>this.pristineReactive()),this.pristineReactive=k(!0),this._touched=U(()=>this.touchedReactive()),this.touchedReactive=k(!1),this._events=new ue,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return v(this.statusReactive)}set status(e){v(()=>this.statusReactive.set(e))}get valid(){return this.status===F}get invalid(){return this.status===L}get pending(){return this.status==D}get disabled(){return this.status===S}get enabled(){return this.status!==S}get pristine(){return v(this.pristineReactive)}set pristine(e){v(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return v(this.touchedReactive)}set touched(e){v(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new P(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(s=>{s.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new P(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(s=>{s.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new w(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(c({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(s=>{s.disable(h(c({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new q(this.value,n)),this._events.next(new w(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(s=>s(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(n=>{n.enable(h(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===D)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new q(this.value,t)),this._events.next(new w(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(c({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(s=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(s,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,s)=>n&&n._find(s),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new w(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(L)?L:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),s=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),s&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new P(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=at(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}};var Le=new y("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function dt(i,e){return[...e.path,i]}function ct(i,e,t=se){ft(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),pt(i,e),gt(i,e),mt(i,e),ht(i,e)}function Fe(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ht(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ft(i,e){let t=nt(i);e.validator!==null?i.setValidators(Me(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=rt(i);e.asyncValidator!==null?i.setAsyncValidators(Me(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let s=()=>i.updateValueAndValidity();Fe(e._rawValidators,s),Fe(e._rawAsyncValidators,s)}function pt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&We(i,e)})}function mt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&We(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function We(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function gt(i,e){let t=(n,s)=>{e.valueAccessor.writeValue(n),s&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function _t(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function vt(i){return Object.getPrototypeOf(i.constructor)===Ze}function yt(i,e){if(!e)return null;Array.isArray(e);let t,n,s;return e.forEach(l=>{l.constructor===z?t=l:vt(l)?n=l:s=l}),s||n||t||null}function Se(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ie(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ct=class extends oe{constructor(e=null,t,n){super(st(t),lt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var bt={provide:N,useExisting:X(()=>ae)},Pe=Promise.resolve(),ae=(()=>{class i extends N{constructor(t,n,s,l,M,qe){super(),this._changeDetectorRef=M,this.callSetDisabledState=qe,this.control=new Ct,this._registered=!1,this.name="",this.update=new j,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=yt(this,l)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),_t(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ct(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Pe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,s=n!==0&&Ve(n);Pe.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?dt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(d(ne,9),d(Je,10),d(Qe,10),d(Oe,10),d(be,8),d(Le,8))}}static{this.\u0275dir=C({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[ee([bt]),A,pe]})}}return i})();var Vt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=K({type:i})}static{this.\u0275inj=Y({})}}return i})();var $e=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Le,useValue:t.callSetDisabledState??se}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=K({type:i})}static{this.\u0275inj=Y({imports:[Vt]})}}return i})();var wt=()=>[1,2,3,4,5];function Et(i,e){if(i&1){let t=R();r(0,"tr",41)(1,"td",42),a(2),o(),r(3,"td",42),a(4),o(),r(5,"td",42),a(6),o(),r(7,"td",42),a(8),o(),r(9,"td",42)(10,"div",43)(11,"button",44),f("click",function(){let s=b(t).$implicit,l=m();return V(l.openReportPopup(s))}),g(),r(12,"svg",45),p(13,"path",46)(14,"path",47),o()(),O(),r(15,"button",44),f("click",function(){let s=b(t).$implicit,l=m();return V(l.openProjectPopup(s))}),g(),r(16,"svg",45),p(17,"path",48),o()()()()()}if(i&2){let t=e.$implicit;u(2),_(t.name),u(2),_(t.createdDate),u(2),_(t.status),u(2),_(t.report)}}function Mt(i,e){i&1&&(r(0,"div",60),g(),r(1,"svg",32),p(2,"path",61),o()())}function At(i,e){if(i&1){let t=R();r(0,"div",49)(1,"div",50)(2,"div",51)(3,"h3",52),a(4),o(),r(5,"p",53),a(6),o(),r(7,"div",54)(8,"h4",3),a(9,"Imagenes Cargadas"),o(),r(10,"div",55),T(11,Mt,3,0,"div",56),o()(),r(12,"div",57)(13,"button",58),f("click",function(){b(t);let s=m();return V(s.uploadImages())}),a(14," Subir Imagenes "),o()(),r(15,"div",57)(16,"button",59),f("click",function(){b(t);let s=m();return V(s.closeProjectPopup())}),a(17," Cerrar "),o()()()()()}if(i&2){let t=m();u(4),_(t.selectedProject==null?null:t.selectedProject.name),u(2),_(t.selectedProject==null?null:t.selectedProject.createdDate),u(5),x("ngForOf",ye(3,wt))}}function xt(i,e){if(i&1){let t=R();r(0,"div",62)(1,"div",63)(2,"div",51)(3,"h3",52),a(4,"Reporte de Cuadrilla de Telecomunicaciones"),o(),r(5,"p",53),a(6),o(),r(7,"div",54)(8,"h4",3),a(9,"1. Introducci\xF3n"),o(),r(10,"p"),a(11,"El prop\xF3sito de este reporte es documentar las actividades llevadas a cabo por la cuadrilla de telecomunicaciones durante el periodo comprendido entre [fecha de inicio] y [fecha de finalizaci\xF3n]. Se incluir\xE1n detalles sobre las tareas realizadas, los problemas enfrentados, las soluciones aplicadas y las recomendaciones para futuras intervenciones."),o(),r(12,"h4",64),a(13,"2. Composici\xF3n de la Cuadrilla"),o(),r(14,"ul",4)(15,"li"),a(16,"Nombre del integrante 1 - Cargo"),o(),r(17,"li"),a(18,"Nombre del integrante 2 - Cargo"),o(),r(19,"li"),a(20,"Nombre del integrante 3 - Cargo"),o(),r(21,"li"),a(22,"Nombre del integrante 4 - Cargo"),o()()(),r(23,"div",65)(24,"button",66),a(25," Compartir "),o(),r(26,"button",67),a(27," Editar "),o(),r(28,"button",68),a(29," Descargar "),o(),r(30,"button",69),f("click",function(){b(t);let s=m();return V(s.closeReportPopup())}),a(31," Cerrar "),o()()()()()}if(i&2){let t=m();u(6),_e("Fecha de Creaci\xF3n: ",t.selectedProject==null?null:t.selectedProject.createdDate,"")}}var le=class i{showProjectPopup=!1;showReportPopup=!1;projectName="";projectDescription="";projectEndDate=new Date;showCreateProjectPopup=!1;selectedProject=null;projects=[{name:"UDG",createdDate:"04/09/24",status:"Pendiente",report:"Por revisar"},{name:"Proyecto X",createdDate:"05/10/24",status:"Completado",report:"Revisado"}];openProjectPopup(e){this.selectedProject=e,this.showProjectPopup=!0}closeProjectPopup(){this.showProjectPopup=!1,this.selectedProject=null}openReportPopup(e){this.selectedProject=e,this.showReportPopup=!0}closeReportPopup(){this.showReportPopup=!1,this.selectedProject=null}uploadImages(){console.log("Uploading images...")}openCreateProjectPopup(e){this.showCreateProjectPopup=!0}closeCreateProjectPopup(){this.showCreateProjectPopup=!1}createProject(e,t,n){let s={name:e,createdDate:new Date().toLocaleDateString(),status:"Pendiente",report:"Por revisar",description:t,endDate:n.toLocaleDateString()};this.projects.push(s),this.closeCreateProjectPopup()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=fe({type:i,selectors:[["app-tables"]],standalone:!0,features:[ve],decls:100,vars:6,consts:[[1,"flex","flex-col","md:flex-row"],[1,"flex-grow","p-0"],[1,"bg-gray-100","p-4","rounded-lg","mb-6"],[1,"font-bold","mb-2"],[1,"list-disc","list-inside"],[1,"flex","items-center","justify-between","border-2","border-dashed","border-gray-300","p-4","rounded-lg"],[1,"text-gray-500"],["onclick","openModal()",1,"bg-gray-200","text-gray-700","py-2","px-4","rounded-lg","flex","items-center"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"h-5","w-5","mr-2"],["fill-rule","evenodd","d","M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clip-rule","evenodd"],["id","projectModal",1,"fixed","inset-0","bg-gray-600","bg-opacity-50","flex","items-center","justify-center","hidden"],[1,"bg-white","p-6","rounded-lg","shadow-lg","w-1/3"],[1,"font-bold","mb-4"],[1,"mb-4"],[1,"block","text-gray-700"],["type","text",1,"w-full","p-2","border","border-gray-300","rounded-lg",3,"ngModelChange","ngModel"],["type","text","value","<!-- Insert current date here -->","readonly","",1,"w-full","p-2","border","border-gray-300","rounded-lg"],[1,"w-full","p-2","border","border-gray-300","rounded-lg",3,"ngModelChange","ngModel"],["type","date",1,"w-full","p-2","border","border-gray-300","rounded-lg",3,"ngModelChange","ngModel"],[1,"bg-blue-500","text-white","py-2","px-4","rounded-lg",3,"click"],[1,"bg-gray-500","text-white","py-2","px-4","rounded-lg","ml-2",3,"click"],[1,"overflow-x-auto"],[1,"w-full","bg-white","shadow-md","rounded-lg","overflow-hidden"],[1,"bg-gray-100"],[1,"py-3","px-4","text-left"],["class","border-b",4,"ngFor","ngForOf"],[1,"md:w-100","p-5","bg-gray-100","ml-4"],[1,"grid","grid-cols-2","gap-4","mb-6"],[1,"bg-white","p-4","rounded-lg","shadow"],[1,"text-3xl","font-bold","text-red-500"],[1,"bg-white","p-4","rounded-lg","shadow","mb-6"],[1,"flex","items-center","justify-between","mb-2"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-gray-400"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"],[1,"bg-gray-200","text-gray-700","py-1","px-3","rounded-lg","text-sm"],[1,"w-full","bg-gray-200","rounded-full","h-2.5"],[1,"bg-blue-600","h-2.5","rounded-full",2,"width","45%"],[1,"mt-4","w-full","bg-gray-200","text-gray-700","py-2","px-4","rounded-lg","flex","items-center","justify-center"],["fill-rule","evenodd","d","M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule","evenodd"],["class","fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full","id","project-modal",4,"ngIf"],["class","fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full","id","report-modal",4,"ngIf"],[1,"border-b"],[1,"py-3","px-4"],[1,"flex","space-x-2"],[1,"text-red-500","hover:text-red-900",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"h-5","w-5"],["d","M10 12a2 2 0 100-4 2 2 0 000 4z"],["fill-rule","evenodd","d","M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule","evenodd"],["fill-rule","evenodd","d","M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule","evenodd"],["id","project-modal",1,"fixed","inset-0","bg-gray-600","bg-opacity-50","overflow-y-auto","h-full","w-full"],[1,"relative","top-20","mx-auto","p-5","border","w-96","shadow-lg","rounded-md","bg-white"],[1,"mt-3"],[1,"text-lg","font-medium","text-gray-900"],[1,"text-sm","text-gray-500"],[1,"mt-2","px-7","py-3"],[1,"grid","grid-cols-5","gap-2"],["class","bg-gray-200 h-12 w-12 flex items-center justify-center",4,"ngFor","ngForOf"],[1,"items-center","px-4","py-3"],[1,"px-4","py-2","bg-blue-500","text-white","text-base","font-medium","rounded-md","w-full","shadow-sm","hover:bg-blue-700","focus:outline-none","focus:ring-2","focus:ring-blue-300",3,"click"],[1,"px-4","py-2","bg-gray-200","text-gray-800","text-base","font-medium","rounded-md","w-full","shadow-sm","hover:bg-gray-300","focus:outline-none","focus:ring-2","focus:ring-gray-300",3,"click"],[1,"bg-gray-200","h-12","w-12","flex","items-center","justify-center"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"],["id","report-modal",1,"fixed","inset-0","bg-gray-600","bg-opacity-50","overflow-y-auto","h-full","w-full"],[1,"relative","top-20","mx-auto","p-5","border","w-3/4","shadow-lg","rounded-md","bg-white"],[1,"font-bold","mt-4","mb-2"],[1,"flex","justify-end","space-x-2","px-4","py-3"],[1,"px-4","py-2","bg-blue-500","text-white","text-base","font-medium","rounded-md","shadow-sm","hover:bg-blue-700","focus:outline-none","focus:ring-2","focus:ring-blue-300"],[1,"px-4","py-2","bg-green-500","text-white","text-base","font-medium","rounded-md","shadow-sm","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-green-300"],[1,"px-4","py-2","bg-red-500","text-white","text-base","font-medium","rounded-md","shadow-sm","hover:bg-red-700","focus:outline-none","focus:ring-2","focus:ring-red-300"],[1,"px-4","py-2","bg-gray-200","text-gray-800","text-base","font-medium","rounded-md","shadow-sm","hover:bg-gray-300","focus:outline-none","focus:ring-2","focus:ring-gray-300",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),a(4,"Hola de nuevo! / Notificaciones"),o(),r(5,"ul",4)(6,"li"),a(7,"Hola Monica, podr\xEDas subir las fotos que tome, gracias"),o(),r(8,"li"),a(9,"Hola buenas tardes quedo al pendiente del reporte de la semana pasada, gracias."),o()()(),r(10,"div",2)(11,"h2",3),a(12,"Crear Proyecto Nuevo"),o(),r(13,"div",5)(14,"span",6),a(15,"Nombre del Proyecto"),o(),r(16,"button",7),g(),r(17,"svg",8),p(18,"path",9),o(),a(19," Crear "),o()()(),O(),r(20,"div",10)(21,"div",11)(22,"h2",12),a(23,"Nuevo Proyecto"),o(),r(24,"div",13)(25,"label",14),a(26,"Nombre del Proyecto"),o(),r(27,"input",15),H("ngModelChange",function(l){return B(n.projectName,l)||(n.projectName=l),l}),o()(),r(28,"div",13)(29,"label",14),a(30,"Fecha de Creaci\xF3n"),o(),p(31,"input",16),o(),r(32,"div",13)(33,"label",14),a(34,"Descripci\xF3n"),o(),r(35,"textarea",17),H("ngModelChange",function(l){return B(n.projectDescription,l)||(n.projectDescription=l),l}),o()(),r(36,"div",13)(37,"label",14),a(38,"Fecha de Finalizaci\xF3n"),o(),r(39,"input",18),H("ngModelChange",function(l){return B(n.projectEndDate,l)||(n.projectEndDate=l),l}),o()(),r(40,"button",19),f("click",function(){return n.createProject(n.projectName,n.projectDescription,n.projectEndDate)}),a(41,"Crear"),o(),r(42,"button",20),f("click",function(){return n.closeCreateProjectPopup()}),a(43,"Cancelar"),o()()(),r(44,"div",21)(45,"table",22)(46,"thead",23)(47,"tr")(48,"th",24),a(49,"Proyecto"),o(),r(50,"th",24),a(51,"Creado"),o(),r(52,"th",24),a(53,"Estatus"),o(),r(54,"th",24),a(55,"Reporte"),o(),r(56,"th",24),a(57,"Archivo"),o()()(),r(58,"tbody"),T(59,Et,18,4,"tr",25),o()()()(),r(60,"div",26)(61,"h2",12),a(62,"Informaci\xF3n"),o(),r(63,"div",27)(64,"div",28)(65,"h3",3),a(66,"Reportes Pendientes"),o(),r(67,"p",29),a(68,"2"),o()(),r(69,"div",28)(70,"h3",3),a(71,"Reportes Por verificaci\xF3n"),o(),r(72,"p",29),a(73,"4"),o()(),r(74,"div",28)(75,"h3",3),a(76,"Proyectos Faltantes"),o(),r(77,"p",29),a(78,"1"),o()(),r(79,"div",28)(80,"h3",3),a(81,"Reportes no enviados"),o(),r(82,"p",29),a(83,"7"),o()()(),r(84,"div",30)(85,"h3",3),a(86,"Generar reporte autom\xE1tico"),o(),r(87,"div",31),g(),r(88,"svg",32),p(89,"path",33),o(),O(),r(90,"button",34),a(91,"Subir"),o()(),r(92,"div",35),p(93,"div",36),o(),r(94,"button",37),g(),r(95,"svg",8),p(96,"path",38),o(),a(97," Descargar Reporte23424.pdf "),o()(),T(98,At,18,4,"div",39)(99,xt,32,1,"div",40),o()()),t&2&&(u(27),G("ngModel",n.projectName),u(8),G("ngModel",n.projectDescription),u(4),G("ngModel",n.projectEndDate),u(20),x("ngForOf",n.projects),u(39),x("ngIf",n.showProjectPopup),u(),x("ngIf",n.showReportPopup))},dependencies:[Ee,De,we,$e,z,Ue,ae]})};export{le as default};