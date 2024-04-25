export default {
    data() {
        return {
            dialog: false,
            student: {},
            headTitle: "",
            emailFieldDisabled: false,
            nameFieldDisabled: false,
            cpfFieldDisabled: false,
            raFieldDisabled: false,

            typeOperation: ""
        };
    },
    methods: {
        openModal(item, operation) {
            this.typeOperation = operation;
            this.dialog = true;

            if (operation == "add") {

                this.headTitle = "Adicionar Usuario";

            } else if (operation == "edit") {

                this.headTitle = "Editar Usuario";
                this.student = { ...item };
                this.cpfFieldDisabled = true;
                this.raFieldDisabled = true;

            } else if (operation == "delete") {

                this.headTitle = "Deletar Usuario?";
                this.student = { ...item };
                this.emailFieldDisabled = true;
                this.nameFieldDisabled = true;
                this.cpfFieldDisabled = true;
                this.raFieldDisabled = true;

            }


        },

        confirmOperation() {

            let idStudent = this.student.id_student;

            if (this.typeOperation == "add") {

                this.$store.dispatch('addStudent', this.student)

            } else if (this.typeOperation == "edit") {

                this.$store.dispatch('editStudent', { idStudent: idStudent, newStudent: this.student })

            } else if (this.typeOperation == "delete") {

                this.$store.dispatch('deleteStudent', idStudent)

            }

            this.clearAndCloseModal();
        },

        clearAndCloseModal() {
            this.emailFieldDisabled = false;
            this.nameFieldDisabled = false;
            this.cpfFieldDisabled = false;
            this.raFieldDisabled = false;
            this.dialog = false;

            this.student = {};
        },
    },
};