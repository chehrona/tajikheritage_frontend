import React, { useEffect, useState } from 'react';

// Hooks
import { useLocation } from 'react-router-dom';

// Services
import { getSections, uploadSectionImage } from '../../services/request';

// Components
import EditSection from './editSection/EditSection';
import EditSectionImage from './editSectionImage/EditSectionImage';

// Styled components
import {
    MainContainer,
    LeftPanel,
    PageWrapper,
    PageName,
    DropdownContent,
    SectionTitle,
    RightPanel,
} from './managementStyles';

function ManagementPage() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [section, setSection] = useState('');
    const [editingSection, setEditingSection] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState({
        us: '',
        ru: '',
        tj: '',
    });

    const fetchData = async () => {
        try {
            const data = await getSections();
            setData(data);
        } catch (error) {
            console.error('Error fetching sections:', error);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    const openDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const pickSection = (e, sectionTitle) => {
        e.stopPropagation();
        data.forEach((entry) => {
            entry.sections.forEach((part) => {
                if (part.title.us === sectionTitle) {
                    setSection(part);
                }
            });
        });
    };

    const handleChange = (e, field, lang) => {
        const value = e.target.value;
        setEditingSection((prev) => ({
            ...prev,
            [field]: lang ? { ...prev[field], [lang]: value } : value,
        }));
    };

    const handleFileChange = (e, lang) => {
        const file = e.target.files[0];

        setSelectedFiles((prev) => ({
            ...prev,
            [lang]: file,
        }));
    };

    const handleUpload = async () => {
        // Check if at least one file is selected
        const hasFileSelected = Object.values(selectedFiles).some(
            (file) => file !== null,
        );

        if (!hasFileSelected) {
            alert('Please select at least one file first!');
            return;
        }

        for (const lang in selectedFiles) {
            const file = selectedFiles[lang];
            if (file) {
                const formData = new FormData();
                formData.append('file', file);

                try {
                    const response = await uploadSectionImage(formData);
                    alert(`${response.data.message}: ${file.name}-${lang}`);
                } catch (error) {
                    console.error(
                        `Error uploading file ${file.name}-${lang}:`,
                        error,
                    );
                }
            }
        }
    };

    const handleUrlChange = () => {
        console.log('hello');
    };

    return (
        <MainContainer>
            <LeftPanel>
                {data?.map((entry, i) => {
                    return (
                        <PageWrapper
                            key={entry._id}
                            onClick={() => openDropdown(i)}
                        >
                            <PageName>
                                {entry.page.charAt(0).toUpperCase() +
                                    entry.page.substring(1)}
                            </PageName>
                            <DropdownContent isOpen={openIndex === i}>
                                {entry.sections.map((section, index) => (
                                    <SectionTitle
                                        key={index}
                                        onClick={(e) =>
                                            pickSection(e, section.title.us)
                                        }
                                    >
                                        {section.title.us}
                                    </SectionTitle>
                                ))}
                            </DropdownContent>
                        </PageWrapper>
                    );
                })}
            </LeftPanel>
            <RightPanel>
                {section && (
                    <div>
                        <EditSection
                            title={section.title}
                            handleChange={handleChange}
                        />
                        <EditSectionImage
                            img={section?.img}
                            handleFileChange={handleFileChange}
                            handleUrlChange={handleUrlChange}
                        />
                        <button onClick={handleUpload}>Upload Image</button>
                    </div>
                )}
            </RightPanel>
        </MainContainer>
    );
}

export default ManagementPage;
