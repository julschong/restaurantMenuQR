exports.removePassword = (owner) => {
    delete owner.dataValues.password;
    delete owner._previousDataValues.password;
};
