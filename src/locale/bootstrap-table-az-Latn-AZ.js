/**
 * Bootstrap Table Azerbaijani (Latin) translation
 * Author: Nizami Abdulazimov <nizami.abdulazimov@gmail.com>
 */

$.fn.bootstrapTable.locales['az-Latn-AZ'] = {
  formatLoadingMessage () {
    return 'Yüklənir, zəhmət olmasa gözləyin'
  },
  formatRecordsPerPage (pageNumber) {
    return `Səhifədə ${pageNumber} sətir`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Səhifə ${pageFrom} ilə ${pageTo} arasında cəmi ${totalRows} sətir göstərilir (cəmi ${totalNotFiltered} sətirdən seçilib)`
    }

    return `Səhifə ${pageFrom} ilə ${pageTo} arasında ${totalRows} sətir göstərilir`
  },
  formatSRPaginationPreText () {
    return 'öncəki səhifə'
  },
  formatSRPaginationPageText (page) {
    return `${page} nömrəli səhifəyə keç`
  },
  formatSRPaginationNextText () {
    return 'sonrakı səhifə'
  },
  formatDetailPagination (totalRows) {
    return `${totalRows} sətir göstərilir`
  },
  formatClearSearch () {
    return 'Axtarışı təmizlə'
  },
  formatSearch () {
    return 'Axtar'
  },
  formatNoMatches () {
    return 'Uyğun sətir tapılmadı'
  },
  formatPaginationSwitch () {
    return 'Səhifələri gizlət / göstər'
  },
  formatPaginationSwitchDown () {
    return 'Səhifə nömrələrini göstər'
  },
  formatPaginationSwitchUp () {
    return 'Səhifə nömrələrini gizlət'
  },
  formatRefresh () {
    return 'Yenilə'
  },
  formatToggle () {
    return 'Görünüşü dəyiş'
  },
  formatToggleOn () {
    return 'Kart olaraq göstər'
  },
  formatToggleOff () {
    return 'Kart görünüşünü gizlət'
  },
  formatColumns () {
    return 'Sütunlar'
  },
  formatColumnsToggleAll () {
    return 'Hamısını dəyiş'
  },
  formatFullscreen () {
    return 'Tam ekran'
  },
  formatAllRows () {
    return 'Bütün sətirlər'
  },
  formatAutoRefresh () {
    return 'Avtoyeniləmə'
  },
  formatExport () {
    return 'Eksport'
  },
  formatJumpTo () {
    return 'Keç'
  },
  formatAdvancedSearch () {
    return 'Detallı axtarış'
  },
  formatAdvancedCloseButton () {
    return 'Bağla'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['az-Latn-AZ'])
