import JSearchCondition from '@/components/search-condition'
import JEditItem from '@/components/edit-item'
import JGridBox from '@/components/grid-box'

export default {
  components: {
    'j-search-condition': JSearchCondition,
    'j-edit-item': JEditItem,
    'j-grid-box': JGridBox
  },
  data() {
    return {
      tableData: [],
      addPagePath: null,//
      pager: {
        current: 1,
        total: 1
      },
    }
  },
  methods: {
    search() {

    },
    handleCurrentChange() {

    },
  },
  mounted() {
  }
}