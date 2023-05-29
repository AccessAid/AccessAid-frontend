import React, { useEffect, Fragment, useState } from 'react';

import PropTypes from 'prop-types';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from '@material-tailwind/react';

const TermAndConditions = ({ open, handleOpen }) => {
  const [size, setSize] = useState('md');

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const dialogWidth = Math.floor(viewportWidth * 0.85); // Calcula el 85% del ancho del viewport

      let newSize = 'md';

      if (dialogWidth <= 768) {
        newSize = 'xl';
      } else if (dialogWidth <= 1024) {
        newSize = 'lg';
      } else {
        newSize = 'md';
      }

      setSize(newSize);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>
      <Dialog open={open} size={size} handler={handleOpen}>
        <DialogHeader>Terms and conditions</DialogHeader>
        <DialogBody divider className='h-[38rem] overflow-scroll'>
          <Typography variant='small'>
            <span>Terms and conditions of use</span>
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              RELEVANT INFORMATION
            </Typography>
            It is a necessary requirement for the acquisition of the products
            offered on this site, that you read and accept the following Terms
            and Conditions that are written below. The use of our services as
            well as the purchase of our products will imply that you have read
            and accepted the Terms and Conditions of Use in this document. All
            the products that are offered by our website could be created,
            collected, sent or presented by a third web page and in such case
            they would be subject to their own Terms and Conditions. In some
            cases, to purchase a product, registration by the user will be
            necessary, with the entry of reliable personal data and definition
            of a password.
            <br />
            <br />
            The user can choose and change the password for his account
            administration access at any time, in case he has registered and
            that it is necessary for the purchase of any of our products.
            www.accessaid.es does not assume responsibility in the event that
            said password is given to third parties
            <br />
            All purchases and transactions carried out through this website are
            subject to a confirmation and verification process, which could
            include verification of stock and product availability, validation
            of the payment method, validation of the invoice (if any) and
            compliance with the conditions required by the selected means of
            payment. In some cases verification via email may be required.
            <br />
            The prices of the products offered in this Online Store are valid
            only for purchases made on this website.
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              LICENSE
            </Typography>
            Access Aid through its website grants a license for users to use the
            products that are sold on this website in accordance with the Terms
            and Conditions described in this document.
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              UNAUTHORIZED USE
            </Typography>
            If applicable (for sale of software, templates, or other design and
            programming products) you may not place one of our products,
            modified or unmodified, on a CD, website, or any other media and
            offer them for redistribution or resale of any kind.
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              PROPERTY
            </Typography>
            You cannot declare intellectual or exclusive property to any of our
            products, modified or unmodified. All products are the property of
            the content providers. Unless otherwise specified, our products are
            provided without warranty of any kind, express or implied. In no way
            will this company be held responsible for any damage including, but
            not limited to, direct, indirect, special, incidental or
            consequential damages or other losses resulting from the use or
            inability to use our products
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              REFUND AND WARRANTY POLICY
            </Typography>
            In the case of products that are non-tangible irrevocable
            merchandise, we do not issue refunds after the product is shipped,
            you have the responsibility to understand before purchasing. We ask
            you to read carefully before you buy it. We only make exceptions to
            this rule when the description does not fit the product. There are
            some products that may have a guarantee and the possibility of a
            refund, but this will be specified when purchasing the product. In
            such cases, the guarantee will only cover factory defects and will
            only become effective when the product has been used correctly. The
            guarantee does not cover breakdowns or damage caused by improper
            use. The terms of the guarantee are associated with manufacturing
            and operation failures under normal conditions of the products and
            these terms will only become effective if the equipment has been
            used correctly.
            <br />
            This includes: <br />– According to the technical specifications
            indicated for each product – Under environmental conditions in
            accordance with the specifications indicated by the manufacturer –
            In specific use for the function with which it was designed from the
            factory – Under electrical operating conditions in accordance with
            the specifications and tolerances indicated.
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              ANTI-FRAUD CHECK
            </Typography>
            The {"customer's"} purchase may be deferred for anti-fraud checking
            It can also be suspended for a longer time for a more rigorous
            investigation, to prevent fraudulent transactions.
            <Typography variant='h6' className='mb-1 mt-3 font-bold'>
              PRIMARY
            </Typography>
            This www.accessaid.es guarantees that sevilla fc news personal
            information that you submit has the necessary security. The data
            entered by the user or in the case of requiring a validation of the
            orders will not be delivered to third parties, unless it must be
            disclosed in compliance with a court order or legal requirements.
            <br />
            <br />
            Subscription to promotional email newsletters is voluntary and may
            be selected at the time of creating your account.
            <br />
            Access Aid reserves the rights to change or modify these terms
            without notice.
            <br />
            <br />
            These terms and conditions have been generated at terms and
            conditions of use example.com.
          </Typography>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

TermAndConditions.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
};

TermAndConditions.defaultProps = {
  open: false,
  handleOpen: () => {},
};

export { TermAndConditions };
