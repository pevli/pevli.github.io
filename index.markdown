---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<div id="lkm" class='lkm'>
</div>

{% include runscript.html %}

<div id='artikkeli' class='sisalto'>
<div id="otsikko" class='sisalto'></div>
<div id="tagit" class='tagit'></div>
<div id="sisalto" class='sisalto' onload='javacript:run_search();'></div>
</div>

<div id="tuloslista" class='tuloslista'></div>

<div id='filtterit' class='vuodet'>
<div id="vuodet"><a class='normal' href="javascript:clear_yearfilters()">clear</a><br>
</div>
<div id="tagfilters" class='tagfilter'>
<a class='normal' href="javascript:clear_tagfilters()">clear</a><br>
<a id="yhdenvertaisuus_ja_syrjinnän_kielto" class="nostrike" href="javascript:toggle_perusoikeus('yhdenvertaisuus_ja_syrjinnän_kielto')">yhdenvertaisuus ja syrjinnän kielto</a><br>
<a id="sukupuolten_tasa-arvo" class="nostrike" href="javascript:toggle_perusoikeus('sukupuolten_tasa-arvo')">sukupuolten tasa-arvo</a><br>
<a id="sananvapaus" class="nostrike" href="javascript:toggle_perusoikeus('sananvapaus')">sananvapaus</a><br>
<a id="kokoontumisvapaus" class="nostrike" href="javascript:toggle_perusoikeus('kokoontumisvapaus')">kokoontumisvapaus</a><br>
<a id="yhdistymisvapaus" class="nostrike" href="javascript:toggle_perusoikeus('yhdistymisvapaus')">yhdistymisvapaus</a><br>
<a id="julkisuusperiaate" class="nostrike" href="javascript:toggle_perusoikeus('julkisuusperiaate')">julkisuusperiaate</a><br>
<a id="vaali-_ja_osallistumusoikeudet" class="nostrike" href="javascript:toggle_perusoikeus('vaali-_ja_osallistumusoikeudet')">vaali- ja osallistumusoikeudet</a><br>
<a id="ympäristö_koskevien_vaikuttamismahdollisuuksien_turvaaminen" class="nostrike" href="javascript:toggle_perusoikeus('ympäristö_koskevien_vaikuttamismahdollisuuksien_turvaaminen')">ympäristö koskevien vaikuttamismahdollisuuksien turvaaminen</a><br>
<a id="oikeusturva" class="nostrike" href="javascript:toggle_perusoikeus('oikeusturva')">oikeusturva</a><br>
<a id="oikeus_elämään_ja_henkilökohtaiseen_vapauteen_koskemattomuuteen_ja_turvallisuuteen" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_elämään_ja_henkilökohtaiseen_vapauteen_koskemattomuuteen_ja_turvallisuuteen')">oikeus elämään ja henkilökohtaiseen vapauteen, koskemattomuuteen ja turvallisuuteen</a><br>
<a id="kuolemanrangaistuksen_ja_ihmisarvoa_loukkaavan_kohtelun_kielto" class="nostrike" href="javascript:toggle_perusoikeus('kuolemanrangaistuksen_ja_ihmisarvoa_loukkaavan_kohtelun_kielto')">kuolemanrangaistuksen ja ihmisarvoa loukkaavan kohtelun kielto</a><br>
<a id="rikosoikeudellinen_laillisuusperiaate" class="nostrike" href="javascript:toggle_perusoikeus('rikosoikeudellinen_laillisuusperiaate')">rikosoikeudellinen laillisuusperiaate</a><br>
<a id="liikkumisvapaus" class="nostrike" href="javascript:toggle_perusoikeus('liikkumisvapaus')">liikkumisvapaus</a><br>
<a id="yksityiselämän_suoja" class="nostrike" href="javascript:toggle_perusoikeus('yksityiselämän_suoja')">yksityiselämän suoja</a><br>
<a id="luottamuksellisen_viestin_salaisuus" class="nostrike" href="javascript:toggle_perusoikeus('luottamuksellisen_viestin_salaisuus')">luottamuksellisen viestin salaisuus</a><br>
<a id="uskonnon_ja_omantunnon_vapaus" class="nostrike" href="javascript:toggle_perusoikeus('uskonnon_ja_omantunnon_vapaus')">uskonnon ja omantunnon vapaus</a><br>
<a id="omaisuuden_suoja" class="nostrike" href="javascript:toggle_perusoikeus('omaisuuden_suoja')">omaisuuden suoja</a><br>
<a id="elinkeinovapaus" class="nostrike" href="javascript:toggle_perusoikeus('elinkeinovapaus')">elinkeinovapaus</a><br>
<a id="työvoiman_suojelu" class="nostrike" href="javascript:toggle_perusoikeus('työvoiman_suojelu')">työvoiman suojelu</a><br>
<a id="oikeus_maksuttomaan_perusopetukseen" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_maksuttomaan_perusopetukseen')">oikeus maksuttomaan perusopetukseen</a><br>
<a id="tieteen_taiteen_ja_ylimmän_opetuksen_vapaus" class="nostrike" href="javascript:toggle_perusoikeus('tieteen_taiteen_ja_ylimmän_opetuksen_vapaus')">tieteen, taiteen ja ylimmän opetuksen vapaus</a><br>
<a id="oikeus_omaan_kieleen" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_omaan_kieleen')">oikeus omaan kieleen</a><br>
<a id="oikeus_omaan_kulttuuriin" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_omaan_kulttuuriin')">oikeus omaan kulttuuriin</a><br>
<a id="oikeus_työhön" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_työhön')">oikeus työhön</a><br>
<a id="oikeus_välttämättömään_toimeentuloon_ja_huolenpitoon" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_välttämättömään_toimeentuloon_ja_huolenpitoon')">oikeus välttämättömään toimeentuloon ja huolenpitoon</a><br>
<a id="perustoimeentulon_turva" class="nostrike" href="javascript:toggle_perusoikeus('perustoimeentulon_turva')">perustoimeentulon turva</a><br>
<a id="sosiaali-_ja_terveyspalveluiden_turvaaminen_terveyden_edistäminen_sekä_lapsen_hyvinvointi_ja_kasvu" class="nostrike" href="javascript:toggle_perusoikeus('sosiaali-_ja_terveyspalveluiden_turvaaminen_terveyden_edistäminen_sekä_lapsen_hyvinvointi_ja_kasvu')">sosiaali- ja terveyspalveluiden turvaaminen, terveyden edistäminen sekä lapsen hyvinvointi ja kasvu</a><br>
<a id="oikeus_asuntoon" class="nostrike" href="javascript:toggle_perusoikeus('oikeus_asuntoon')">oikeus asuntoon</a><br>
<a id="ympäristövastuu_ja_oikeus_terveelliseen_ympäristöön" class="nostrike" href="javascript:toggle_perusoikeus('ympäristövastuu_ja_oikeus_terveelliseen_ympäristöön')">ympäristövastuu ja oikeus terveelliseen ympäristöön</a>
</div>
</div>